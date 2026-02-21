import { useState, useEffect } from 'react'
import { useSectionContext } from '../../../context/useSectionContext'
import type { SectionName } from '../../../context/types'
import styles from './Navbar.module.css'

const navItems: SectionName[] = ['Home', 'Tech Stack', 'Projects', 'Contact']

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const { activeSection, setActiveSection } = useSectionContext()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            const sections = document.querySelectorAll('section[id]')
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect()
                if (rect.top <= 200 && rect.bottom >= 200) {
                    setActiveSection(section.id as SectionName)
                }
            })
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [setActiveSection])

    const scrollTo = (id: SectionName) => {
        setActiveSection(id)
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                Zaky Adwa<span className={styles.logoAccent}> Rifqi</span>
            </div>
            <ul className={styles.navLinks}>
                {navItems.map((item) => (
                    <li key={item}>
                        <button
                            className={`${styles.navLink} ${activeSection === item ? styles.navLinkActive : ''}`}
                            onClick={() => scrollTo(item)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
