import { useInView } from '../../../hooks/useInView'
import styles from './ProjectSection.module.css'

const projects = [
    {
        title: "Cihuy",
        tag: "Cihuy",
        color: "#1a1a2e",
    },
    {
        title: "test",
        tag: "test",
        color: "#2d1b4e",
    },
    {
        title: "apa ya",
        tag: "apa ya",
        color: "#1b3a4b",
    },
    {
        title: "apa ya",
        tag: "test",
        color: "#1a1a2e",
    },
    {
        title: "apa ya",
        tag: "test",
        color: "#2d2d2d",
    },
    {
        title: "apa ya",
        tag: "test",
        color: "#1b2838",
    },
]

const ProjectSection = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 })

    return (
        <section
            className={`${styles.projects} ${isInView ? styles.visible : styles.hidden}`}
            id="Projects"
            ref={ref as React.RefObject<HTMLElement>}
        >
            <h2 className={styles.title}>
                <span className={styles.titleGradient}>Projects</span>
            </h2>
            <div className={styles.grid}>
                {projects.map((p, i) => (
                    <div
                        key={p.title + i}
                        className={styles.card}
                        style={{
                            backgroundColor: p.color,
                            transitionDelay: isInView ? `${i * 0.1}s` : '0s',
                        }}
                    >
                        <div className={styles.cardOverlay}>
                            <h3 className={styles.cardTitle}>{p.title}</h3>
                            <span className={styles.cardTag}>{p.tag}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection
