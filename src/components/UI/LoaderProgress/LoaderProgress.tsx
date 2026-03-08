import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';
import styles from './LoaderProgress.module.css';

const HTMLKeyboard = () => {
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    const [activeKey, setActiveKey] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setActiveKey(e.key.toUpperCase());
        };
        const handleKeyUp = () => {
            setActiveKey(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <div className={styles.htmlKeyboard}>
            {rows.map((row, i) => (
                <div key={i} className={styles.keyboardRow}>
                    {row.map(key => (
                        <div
                            key={key}
                            className={`${styles.key} ${activeKey === key ? styles.activeKey : ''}`}
                            onMouseDown={() => setActiveKey(key)}
                            onMouseUp={() => setActiveKey(null)}
                            onMouseLeave={() => setActiveKey(null)}
                        >
                            {key}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

const LoaderProgress = () => {
    const { progress } = useProgress();
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (progress === 100) {
            const timer = setTimeout(() => {
                setHidden(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    return (
        <div className={`${styles.loaderOverlay} ${hidden ? styles.hidden : ''}`}>
            <HTMLKeyboard />
            <div className={styles.loadingText}>
                LOADING {Math.round(progress)}%
            </div>
            <div className={styles.progressBarContainer}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default LoaderProgress;