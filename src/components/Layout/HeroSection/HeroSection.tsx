import { Github, Linkedin } from 'lucide-react'
import { useInView } from '../../../hooks/useInView'
import styles from './HeroSection.module.css'

const HeroSection = () => {
    const { ref, isInView } = useInView({ threshold: 0.45 })

    return (
        <section
            className={`${styles.hero} ${isInView ? styles.visible : styles.hidden}`}
            id="Home"
            ref={ref as React.RefObject<HTMLElement>}
        >
            <div className={styles.content}>
                <p className={styles.subtitle}>Hi, I am</p>
                <h1 className={styles.title}>
                    <span className={styles.titleGradient}>
                        Zaky Adwa<br />Rifqi
                    </span>
                </h1>
                <p className={styles.desc}>A Frontend Developer</p>
                <div className={styles.buttons}>
                    <a href="#Contact" className={styles.btnPrimary}>Hire Me</a>
                </div>
                <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialIcon} aria-label="GitHub">
                        <Github size={16} />
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                        <Linkedin size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
