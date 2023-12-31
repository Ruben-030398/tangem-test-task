import { useEffect, useState } from "react";

export default function useScrollListener(scrollLength: number) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (scrollLength) {
      const listener = () => {
        const pageTop = document.body.getBoundingClientRect().top;
  
        if (Math.abs(pageTop) >= scrollLength) {
          setIsScrolled(true)
        }
      }
  
      window.addEventListener('scroll', listener);
  
      return () => {
        window.removeEventListener('scroll', listener);
      }
    }
    
  }, [isScrolled, scrollLength]);

  return isScrolled;
}