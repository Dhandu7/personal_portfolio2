import { personal } from '../data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} {personal.name}</span>
      <span>Built with React + Vite</span>
      <a href={personal.website} target="_blank" rel="noreferrer">
        {personal.website.replace('https://', '')}
      </a>
    </footer>
  )
}
