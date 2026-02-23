import { personal, stats } from '../data'
import SectionHeader from './SectionHeader'
import FadeIn from './FadeIn'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <FadeIn>
        <SectionHeader num="01" title="About" />
      </FadeIn>

      <div className={styles.grid}>
        {/* ── PHOTO ── */}
        <FadeIn delay={100} className={styles.photoWrap}>
          <div className={styles.photoFrame}>
            {personal.photo ? (
              <img src={personal.photo} alt={personal.name} className={styles.photo} />
            ) : (
              <div className={styles.photoPlaceholder}>
                <span className={styles.placeholderIcon}>👤</span>
                <p className={styles.placeholderText}>
                  Drop your photo in <code>/public/</code><br />
                  and set <code>personal.photo</code><br />
                  in <code>src/data.js</code>
                </p>
              </div>
            )}
          </div>
        </FadeIn>

        {/* ── TEXT ── */}
        <FadeIn delay={200} className={styles.text}>
          <h3 className={styles.heading}>Building things that matter.</h3>
          <p>
            I'm a 4th year Software Engineering student at the {personal.university}, passionate about
            building intelligent, data-driven applications. Currently working at Hydro One Networks as a
            Co-op, I love bridging the gap between raw data and meaningful insights.
          </p>
          <p>
            From ML-powered health apps to large-scale ETL automation pipelines, I thrive on solving hard
            problems with clean, scalable code. I have a strong interest in machine learning, backend systems,
            and developer tooling.
          </p>
          <p className={styles.meta}>
          </p>

          <div className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
