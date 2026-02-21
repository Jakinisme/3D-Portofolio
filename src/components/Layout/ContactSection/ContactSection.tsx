import { Mail, Send } from 'lucide-react'
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
                <h2 className={styles.title}>
                    <span className={styles.titleGradient}>
                        Let's Work Together
                    </span>
                </h2>
                <p className={styles.desc}>
                    Have a project in mind? Drop me a message and let's build something amazing.
                </p>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Full Name</label>
                            <input className={styles.formInput} placeholder="Jaki" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Email Address</label>
                            <input className={styles.formInput} placeholder="jaki@ganteng.com" type="email" />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Your Message</label>
                        <textarea className={styles.formTextarea} placeholder="Tell me about your project..." />
                    </div>
                    <p className={styles.formNote}>
                        I'll never share your data with anyone else. Pinky promised!
                    </p>
                    <button className={styles.formSubmit} type="submit">
                        <Mail size={16} /> Send Message <Send size={14} />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection
