// TerminalPanel.jsx
// Drop this into your Hero section as the right-side panel.
// Usage: import TerminalPanel from './TerminalPanel'
//        Then add <TerminalPanel /> inside your <section> next to <div className={styles.content}>

import { useState, useEffect, useRef } from 'react'

const LINES = [
  { delay: 0,    text: '$ whoami',                         type: 'cmd' },
  { delay: 600,  text: 'aaryan_dhand',                     type: 'out' },
  { delay: 1100, text: '$ cat skills.txt',                 type: 'cmd' },
  { delay: 1700, text: 'Python  TypeScript  Go  Rust',     type: 'out' },
  { delay: 2000, text: 'React   FastAPI    PostgreSQL',    type: 'out' },
  { delay: 2300, text: 'Docker  Kubernetes  AWS',          type: 'out' },
  { delay: 2900, text: '$ git log --oneline -3',           type: 'cmd' },
  { delay: 3500, text: 'a3f9c1e  feat: ML pipeline v2',    type: 'out' },
  { delay: 3800, text: 'b7d2e4a  fix: data ingestion bug', type: 'out' },
  { delay: 4100, text: 'c1a8f3b  refactor: API layer',     type: 'out' },
  { delay: 4700, text: '$ python train.py --epochs 100',   type: 'cmd' },
  { delay: 5300, text: 'Epoch 1/100  loss: 0.8421',        type: 'out' },
  { delay: 5600, text: 'Epoch 50/100 loss: 0.1893',        type: 'out' },
  { delay: 5900, text: 'Epoch 100/100 loss: 0.0412 ✓',    type: 'success' },
  { delay: 6500, text: '$ ./deploy.sh --env prod',         type: 'cmd' },
  { delay: 7100, text: 'Building image...',                type: 'out' },
  { delay: 7400, text: 'Pushing to registry...',           type: 'out' },
  { delay: 7800, text: '✓ Deployed successfully',          type: 'success' },
]

export default function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState([])
  const [showCursor, setShowCursor] = useState(true)
  const bodyRef = useRef(null)

  useEffect(() => {
    const timers = LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i])
        if (bodyRef.current) {
          bodyRef.current.scrollTop = bodyRef.current.scrollHeight
        }
      }, line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(c => !c), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={styles.wrapper}>
      {/* Ambient glow behind terminal */}
      <div style={styles.glow} />

      <div style={styles.terminal}>
        {/* Title bar */}
        <div style={styles.titleBar}>
          <div style={styles.dots}>
            <span style={{ ...styles.dot, background: '#ff5f57' }} />
            <span style={{ ...styles.dot, background: '#febc2e' }} />
            <span style={{ ...styles.dot, background: '#28c840' }} />
          </div>
          <span style={styles.titleText}>bash — ad.dev</span>
          <div style={{ width: 48 }} />
        </div>

        {/* Body */}
        <div style={styles.body} ref={bodyRef}>
          {LINES.map((line, i) =>
            visibleLines.includes(i) ? (
              <div key={i} style={styles.lineWrapper}>
                {line.type === 'cmd' && (
                  <span style={styles.prompt}>›&nbsp;</span>
                )}
                <span
                  style={
                    line.type === 'cmd'
                      ? styles.cmdText
                      : line.type === 'success'
                      ? styles.successText
                      : styles.outText
                  }
                >
                  {line.text}
                </span>
              </div>
            ) : null
          )}

          {/* Active cursor line */}
          <div style={styles.lineWrapper}>
            <span style={styles.prompt}>›&nbsp;</span>
            <span style={showCursor ? styles.cursorActive : styles.cursorHidden}>█</span>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div style={{ ...styles.corner, top: 0, left: 0, borderTop: '1px solid #00e5ff40', borderLeft: '1px solid #00e5ff40' }} />
      <div style={{ ...styles.corner, top: 0, right: 0, borderTop: '1px solid #00e5ff40', borderRight: '1px solid #00e5ff40' }} />
      <div style={{ ...styles.corner, bottom: 0, left: 0, borderBottom: '1px solid #00e5ff40', borderLeft: '1px solid #00e5ff40' }} />
      <div style={{ ...styles.corner, bottom: 0, right: 0, borderBottom: '1px solid #00e5ff40', borderRight: '1px solid #00e5ff40' }} />
    </div>
  )
}

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: 520,
    margin: '0 auto',
  },
  glow: {
    position: 'absolute',
    inset: '-40px',
    background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  terminal: {
    position: 'relative',
    zIndex: 1,
    background: 'rgba(5, 12, 20, 0.92)',
    border: '1px solid rgba(0, 229, 255, 0.18)',
    borderRadius: 10,
    overflow: 'hidden',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 0 0 1px rgba(0,229,255,0.05), 0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
  },
  titleBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 14px',
    background: 'rgba(0,229,255,0.04)',
    borderBottom: '1px solid rgba(0,229,255,0.1)',
  },
  dots: {
    display: 'flex',
    gap: 6,
    width: 48,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    display: 'inline-block',
  },
  titleText: {
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    fontSize: 11,
    color: 'rgba(0,229,255,0.5)',
    letterSpacing: '0.08em',
  },
  body: {
    padding: '16px 20px 20px',
    height: 340,
    overflowY: 'auto',
    fontFamily: '"JetBrains Mono", "Fira Code", "Courier New", monospace',
    fontSize: 13,
    lineHeight: '22px',
    scrollbarWidth: 'none',
  },
  lineWrapper: {
    display: 'flex',
    alignItems: 'baseline',
  },
  prompt: {
    color: '#00e5ff',
    userSelect: 'none',
    flexShrink: 0,
  },
  cmdText: {
    color: '#e2f0ff',
  },
  outText: {
    color: 'rgba(180,200,220,0.65)',
    paddingLeft: 14,
  },
  successText: {
    color: '#00e5c8',
    paddingLeft: 14,
  },
  cursorActive: {
    color: '#00e5ff',
    opacity: 1,
  },
  cursorHidden: {
    color: '#00e5ff',
    opacity: 0,
  },
  corner: {
    position: 'absolute',
    width: 12,
    height: 12,
    pointerEvents: 'none',
    zIndex: 2,
  },
}
