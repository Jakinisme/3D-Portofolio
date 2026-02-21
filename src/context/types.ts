export type SectionName = 'Home' | 'Tech Stack' | 'Projects' | 'Contact'

export interface Skill {
    title: string
    description: string
    icon: string
    experience: string
    color: string
}

export interface SectionContextType {
    activeSection: SectionName
    setActiveSection: (section: SectionName) => void
    selectedSkill: Skill | null
    setSelectedSkill: (skill: Skill | null) => void
    isModalOpen: boolean
    setIsModalOpen: (isOpen: boolean) => void
}
