import { useState, type ReactNode } from 'react'
import { SectionContext } from './context'
import type { SectionName, Skill } from './types'

export const SectionProvider = ({ children }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <SectionContext.Provider value={{
            activeSection,
            setActiveSection,
            selectedSkill,
            setSelectedSkill,
            isModalOpen,
            setIsModalOpen
        }}>
            {children}
        </SectionContext.Provider>
    )
}
