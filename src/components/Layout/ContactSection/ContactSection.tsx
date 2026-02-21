import { Mail, Github, ArrowRight } from 'lucide-react'
import { useInView } from '../../../hooks/useInView'
import styles from './ContactSection.module.css'

const ContactSection = () => {
    const { ref, isInView } = useInView({ threshold: 0.2 })

    return (
        <section
            className={`${styles.contact} ${isInView ? styles.visible : styles.hidden}`}
            id="Contact"
            ref={ref as React.RefObject<HTMLElement>}
        >
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        <span className={styles.titleGradient}>
                            Let's Work Together
                        </span>
                    </h2>
                    <p className={styles.desc}>
                        Have a project in mind? Drop me a message and let's build something amazing.
                    </p>
                </div>

                <div className={styles.linksContainer}>
                    <a href="mailto:adwashark@gmail.com" className={styles.contactCard}>
                        <div className={styles.cardIcon}>
                            <Mail size={24} />
                        </div>
                        <div className={styles.cardText}>
                            <h3>Email Me</h3>
                            <p>adwashark@gmail.com</p>
                        </div>
                        <ArrowRight size={20} className={styles.arrow} />
                    </a>

                    <a href="https://github.com/Jakinisme" className={styles.contactCard} target="_blank" rel="noopener noreferrer">
                        <div className={styles.cardIcon}>
                            <Github size={24} />
                        </div>
                        <div className={styles.cardText}>
                            <h3>GitHub</h3>
                            <p>Check out my repos</p>
                        </div>
                        <ArrowRight size={20} className={styles.arrow} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
