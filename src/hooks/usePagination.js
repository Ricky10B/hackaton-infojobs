import { useEffect, useState } from 'react'

export const usePagination = () => {
  const widthPage = document.body.clientWidth
  const [showPages, setShowPages] = useState(widthPage < 768 ? 3 : 5)

  useEffect(() => {
    window.addEventListener('resize', e => {
      if (e.target.innerWidth < 768 && showPages !== 3) {
        setShowPages(3)
      }

      if (e.target.innerWidth >= 768 && showPages !== 5) {
        setShowPages(5)
      }
    })
  }, [showPages])

  return { showPages }
}
