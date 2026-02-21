import { useInView } from '../../../hooks/useInView'
import styles from './TechStack.module.css'

const TechStack = () => {
    const { ref, isInView } = useInView({ threshold: 0.2 })

    return (
        <section
            className={`${styles.techStack} ${isInView ? styles.visible : styles.hidden}`}
            id="Tech Stack"
            ref={ref as React.RefObject<HTMLElement>}
        >
            <div className={styles.content}>
                <h2 className={styles.title}>
                    <span className={styles.titleGradient}>Tech Stack</span>
                </h2>
                <p className={styles.hint}>[hint: press a key]</p>
            </div>
        </section>
    )
}

export default TechStack
