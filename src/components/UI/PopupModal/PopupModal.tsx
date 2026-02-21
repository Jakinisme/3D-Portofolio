import { useSectionContext } from '../../../context/useSectionContext'
import styles from './Popup.module.css'

const PopupModal = () => {
    const { isModalOpen, setIsModalOpen, selectedSkill } = useSectionContext()

    if (!selectedSkill) return null

    return (
        <div
            className={`${styles.backdrop} ${isModalOpen ? styles.open : ''}`}
            onClick={() => setIsModalOpen(false)}
        >
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
                style={{ '--skill-color': selectedSkill.color } as React.CSSProperties}
            >
                <button
                    className={styles.closeButton}
                    onClick={() => setIsModalOpen(false)}
                >
                    &times;
                </button>

                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.iconWrapper} style={{ boxShadow: `0 0 20px ${selectedSkill.color}44` }}>
                            {selectedSkill.icon}
                        </div>
                        <div className={styles.titleWrapper}>
                            <span className={styles.experience}>{selectedSkill.experience}</span>
                            <h2>{selectedSkill.title}</h2>
                        </div>
                    </div>

                    <p className={styles.description}>
                        {selectedSkill.description}
                    </p>

                    <div className={styles.footer}>
                        <span className={styles.tag}>Experience</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupModal