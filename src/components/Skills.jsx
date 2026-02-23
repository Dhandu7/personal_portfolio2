import { skillGroups } from '../data'
import SectionHeader from './SectionHeader'
import FadeIn from './FadeIn'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <FadeIn>
        <SectionHeader num="04" title="Skills" />
      </FadeIn>

      <div className={styles.grid}>
        {skillGroups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 80}>
            <div className={styles.group}>
              <div className={styles.groupTitle}>{group.title}</div>
              <div className={styles.tags}>
                {group.skills.map(skill => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
