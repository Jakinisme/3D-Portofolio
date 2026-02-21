import { useState, type ReactNode } from 'react'
import { SectionContext } from './context'
import type { SectionName } from './types'

export const SectionProvider = ({ children }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SectionContext.Provider>
    )
}
