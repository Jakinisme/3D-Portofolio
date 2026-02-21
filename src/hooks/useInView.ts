import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
    threshold?: number
    rootMargin?: string
    once?: boolean
}

export const useInView = (options: UseInViewOptions = {}) => {
    const { threshold = 0.45, rootMargin = '0px', once = false } = options
    const ref = useRef<HTMLElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    if (once) observer.unobserve(el)
                } else if (!once) {
                    setIsInView(false)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold, rootMargin, once])

    return { ref, isInView }
}
