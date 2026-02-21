import { createContext } from 'react'
import type { SectionContextType } from './types'

export const SectionContext = createContext<SectionContextType>({
    activeSection: 'Home',
    setActiveSection: () => { },
})
