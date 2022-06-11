import './styles.css'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { useState } from 'react'

export function ToTopButton() {
  const [visible, setVisible] = useState(false)

  function toogleVisible() {
    if (window.scrollY > 500) {
      setVisible(true)
    } else if (window.scrollY <= 500) {
      setVisible(false)
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toogleVisible)

  return (
    <AiOutlineArrowUp
      className="to-top-button"
      onClick={() => scrollToTop()}
      style={{ display: visible ? 'inline' : 'none' }}
    />
  )
}
