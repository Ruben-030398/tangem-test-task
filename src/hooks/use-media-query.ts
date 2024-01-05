import { useEffect, useState } from 'react'

export enum BreakPoints {
  Desktop = 1728,
  TabLend = 1170,
  TabPort = 834,
  Mobile = 430,
}

export default function useMediaQuery(query: string | number, direction: 'min-width' | 'max-width' = 'max-width'): boolean {
  const mediaQuery = typeof query === 'string' ? query : `(${direction}: ${query}px)`;

  const getMatches = (query: string): boolean => {
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => getMatches(mediaQuery))

  useEffect(() => {
    const matchMedia = window.matchMedia(mediaQuery)

    const handleChange = () => {
      setMatches(getMatches(mediaQuery))
    }
  
    handleChange()

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
  }, [mediaQuery])

  return matches
}