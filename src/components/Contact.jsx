import { personal } from '../data'
import SectionHeader from './SectionHeader'
import FadeIn from './FadeIn'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <FadeIn>
        <div className={styles.inner}>
          <div className={styles.glow} />
          <h2 className={styles.heading}>Let's Connect</h2>
          <p className={styles.sub}>
            Open to internships, co-ops, and exciting projects. Feel free to reach out!
          </p>
          <div className={styles.links}>
            <a href={`mailto:${personal.email}`} className={`${styles.btn} ${styles.btnPrimary}`}>
              ✉ Email Me
            </a>
            <a href={personal.linkedin} target="_blank" rel="https://www.linkedin.com/in/aaryandhand/" className={`${styles.btn} ${styles.btnOutline}`}>
              LinkedIn ↗
            </a>
            <a href={personal.github} target="_blank" rel="https://github.com/Dhandu7" className={`${styles.btn} ${styles.btnOutline}`}>
              GitHub ↗
            </a>

          </div>
          <p className={styles.phone}> {personal.phone}</p>
        </div>
      </FadeIn>
    </section>
  )
}
