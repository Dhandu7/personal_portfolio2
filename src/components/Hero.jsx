import { useState, useEffect } from 'react'
import { personal } from '../data'
import styles from './Hero.module.css'

function useTyped(phrases) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const phrase = phrases[phraseIdx]
    let timeout

    if (!deleting) {
      if (charIdx < phrase.length) {
        timeout = setTimeout(() => {
          setText(phrase.slice(0, charIdx + 1))
          setCharIdx(i => i + 1)
        }, 70)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setText(phrase.slice(0, charIdx - 1))
          setCharIdx(i => i - 1)
        }, 40)
      } else {
        setDeleting(false)
        setPhraseIdx(i => (i + 1) % phrases.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx, phrases])

  return text
}

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export default function Hero() {
  const typed = useTyped(personal.typedPhrases)

  return (
    <section className={styles.hero} id="home">
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.glow2} />

      <div className={styles.heroRow}>
        {/* ── Left: text content ── */}
        <div className={styles.content}>
          <p className={styles.tag}>{personal.tagline}</p>
          <h1 className={styles.name}>{personal.name}</h1>

          <div className={styles.typedLine}>
            <span className={styles.typedText}>{typed}</span>
            <span className={styles.cursor} />
          </div>

          <p className={styles.desc}>{personal.description}</p>

          <div className={styles.cta}>
            <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              View Projects
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
              <GitHubIcon /> GitHub
            </a>
            {personal.resume && (
              <a
                href={personal.resume}
                download="Aaryan_Dhand_Resume.pdf"
                className={`${styles.btn} ${styles.btnResume}`}
              >
                <DownloadIcon /> Resume
              </a>
            )}
          </div>
        </div>

        {/* ── Right: photo ── */}
        <div className={styles.rightPanel}>
          <div className={styles.photoWrapper}>
            <div className={styles.photoGlow} />
            <img
              src={personal.photo}
              alt={personal.name}
              className={styles.photo}
            />
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}
