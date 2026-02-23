import { experiences } from '../data'
import SectionHeader from './SectionHeader'
import FadeIn from './FadeIn'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <FadeIn>
        <SectionHeader num="02" title="Experience" />
      </FadeIn>

      <div className={styles.list}>
        {experiences.map((exp, i) => (
          <FadeIn key={exp.id} delay={i * 80}>
            <div className={`${styles.card} ${exp.current ? styles.current : ''}`}>
              <div className={styles.cardBar} />
              <div className={styles.header}>
                <div className={styles.headerLeft}>
                  <div className={styles.company}>{exp.company}</div>
                  <div className={styles.role}>{exp.role}</div>
                  <div className={styles.location}>📍 {exp.location}</div>
                </div>
                <div className={styles.headerRight}>
                  <span className={styles.date}>{exp.date}</span>
                  {exp.current && <span className={styles.badge}>Current</span>}
                </div>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
