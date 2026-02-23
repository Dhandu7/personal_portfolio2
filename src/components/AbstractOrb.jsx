// AbstractOrb.jsx
// 3D animated abstract orb using Three.js (loaded via CDN script tag).
// No npm install needed — loads Three.js r128 from cdnjs automatically.
//
// Usage: import AbstractOrb from './AbstractOrb'
//        Then add <AbstractOrb /> inside your <section> next to <div className={styles.content}>

import { useEffect, useRef } from 'react'

function loadThree() {
  return new Promise(resolve => {
    if (window.THREE) return resolve(window.THREE)
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    script.onload = () => resolve(window.THREE)
    document.head.appendChild(script)
  })
}

export default function AbstractOrb() {
  const mountRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    let renderer, scene, camera, mesh, wireMesh, particles, clock

    loadThree().then(THREE => {
      const mount = mountRef.current
      if (!mount) return

      const W = mount.clientWidth
      const H = mount.clientHeight

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(W, H)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)
      mount.appendChild(renderer.domElement)

      // Scene & camera
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100)
      camera.position.z = 4.5

      clock = new THREE.Clock()

      // ── Icosahedron base ──────────────────────────────────────
      const geo = new THREE.IcosahedronGeometry(1.4, 4)

      // Solid layer — dark tinted glass
      const mat = new THREE.MeshPhongMaterial({
        color: 0x001a26,
        emissive: 0x001a26,
        specular: 0x00e5ff,
        shininess: 60,
        transparent: true,
        opacity: 0.55,
        side: THREE.FrontSide,
      })
      mesh = new THREE.Mesh(geo, mat)
      scene.add(mesh)

      // Wireframe layer — cyan lines
      const wireGeo = new THREE.IcosahedronGeometry(1.42, 2)
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      })
      wireMesh = new THREE.Mesh(wireGeo, wireMat)
      scene.add(wireMesh)

      // Outer shell — faint glow ring
      const outerGeo = new THREE.IcosahedronGeometry(1.58, 1)
      const outerMat = new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.07,
      })
      const outerMesh = new THREE.Mesh(outerGeo, outerMat)
      scene.add(outerMesh)

      // ── Floating particles ────────────────────────────────────
      const pCount = 280
      const pPositions = new Float32Array(pCount * 3)
      for (let i = 0; i < pCount; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = 1.9 + Math.random() * 1.4
        pPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
        pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        pPositions[i * 3 + 2] = r * Math.cos(phi)
      }
      const pGeo = new THREE.BufferGeometry()
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3))
      const pMat = new THREE.PointsMaterial({
        color: 0x00e5ff,
        size: 0.025,
        transparent: true,
        opacity: 0.55,
        sizeAttenuation: true,
      })
      particles = new THREE.Points(pGeo, pMat)
      scene.add(particles)

      // ── Lights ────────────────────────────────────────────────
      const ambient = new THREE.AmbientLight(0x00e5ff, 0.3)
      scene.add(ambient)

      const point1 = new THREE.PointLight(0x00e5ff, 2.5, 10)
      point1.position.set(3, 3, 3)
      scene.add(point1)

      const point2 = new THREE.PointLight(0x0066ff, 1.5, 10)
      point2.position.set(-3, -2, -2)
      scene.add(point2)

      // ── Mouse interaction ─────────────────────────────────────
      let mouseX = 0, mouseY = 0
      const onMouseMove = e => {
        const rect = mount.getBoundingClientRect()
        mouseX = ((e.clientX - rect.left) / W - 0.5) * 2
        mouseY = -((e.clientY - rect.top) / H - 0.5) * 2
      }
      mount.addEventListener('mousemove', onMouseMove)

      // ── Animate ───────────────────────────────────────────────
      const animate = () => {
        frameRef.current = requestAnimationFrame(animate)
        const t = clock.getElapsedTime()

        // Slow base rotation
        mesh.rotation.x = t * 0.09 + mouseY * 0.3
        mesh.rotation.y = t * 0.13 + mouseX * 0.3
        wireMesh.rotation.x = -t * 0.07 + mouseY * 0.2
        wireMesh.rotation.y = -t * 0.11 + mouseX * 0.2
        outerMesh.rotation.x = t * 0.05
        outerMesh.rotation.y = t * 0.08

        // Breathing scale
        const pulse = 1 + Math.sin(t * 1.2) * 0.03
        mesh.scale.setScalar(pulse)
        wireMesh.scale.setScalar(pulse * 1.01)

        // Rotate particles slowly
        particles.rotation.y = t * 0.04
        particles.rotation.x = t * 0.02

        renderer.render(scene, camera)
      }
      animate()

      // ── Resize ────────────────────────────────────────────────
      const onResize = () => {
        const nW = mount.clientWidth
        const nH = mount.clientHeight
        camera.aspect = nW / nH
        camera.updateProjectionMatrix()
        renderer.setSize(nW, nH)
      }
      window.addEventListener('resize', onResize)

      // Store cleanup refs
      mount._cleanup = () => {
        mount.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)
      }
    })

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      const mount = mountRef.current
      if (mount) {
        if (mount._cleanup) mount._cleanup()
        const canvas = mount.querySelector('canvas')
        if (canvas) mount.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div style={outerStyle}>
      {/* Ambient glow */}
      <div style={glowStyle} />

      {/* Canvas mount */}
      <div ref={mountRef} style={canvasStyle} />

      {/* Corner accents */}
      <div style={{ ...corner, top: 0, left: 0, borderTop: '1px solid rgba(0,229,255,0.3)', borderLeft: '1px solid rgba(0,229,255,0.3)' }} />
      <div style={{ ...corner, top: 0, right: 0, borderTop: '1px solid rgba(0,229,255,0.3)', borderRight: '1px solid rgba(0,229,255,0.3)' }} />
      <div style={{ ...corner, bottom: 0, left: 0, borderBottom: '1px solid rgba(0,229,255,0.3)', borderLeft: '1px solid rgba(0,229,255,0.3)' }} />
      <div style={{ ...corner, bottom: 0, right: 0, borderBottom: '1px solid rgba(0,229,255,0.3)', borderRight: '1px solid rgba(0,229,255,0.3)' }} />

      {/* Label */}
      <div style={labelStyle}>
        <span style={labelDot} />
        <span style={labelText}>SYSTEMS ONLINE</span>
      </div>
    </div>
  )
}

const outerStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: 520,
  height: 420,
  margin: '0 auto',
}

const glowStyle = {
  position: 'absolute',
  inset: '-60px',
  background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.1) 0%, transparent 65%)',
  pointerEvents: 'none',
  zIndex: 0,
}

const canvasStyle = {
  position: 'relative',
  zIndex: 1,
  width: '100%',
  height: '100%',
  borderRadius: 12,
  overflow: 'hidden',
  border: '1px solid rgba(0,229,255,0.12)',
  background: 'rgba(0,8,16,0.5)',
  backdropFilter: 'blur(8px)',
  cursor: 'crosshair',
}

const corner = {
  position: 'absolute',
  width: 14,
  height: 14,
  pointerEvents: 'none',
  zIndex: 3,
}

const labelStyle = {
  position: 'absolute',
  bottom: 16,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  gap: 7,
  zIndex: 4,
  background: 'rgba(0,0,0,0.4)',
  border: '1px solid rgba(0,229,255,0.15)',
  borderRadius: 20,
  padding: '4px 12px',
}

const labelDot = {
  display: 'inline-block',
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: '#00e5ff',
  boxShadow: '0 0 6px #00e5ff',
  animation: 'pulse 2s ease-in-out infinite',
}

const labelText = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: 10,
  letterSpacing: '0.15em',
  color: 'rgba(0,229,255,0.7)',
}
