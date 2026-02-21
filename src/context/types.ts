export type SectionName = 'Home' | 'Tech Stack' | 'Projects' | 'Contact'

export interface SectionContextType {
    activeSection: SectionName
    setActiveSection: (section: SectionName) => void
}
