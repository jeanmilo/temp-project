import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import Link from 'next/link'


const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Header({ darkMode, toggleTheme, textEnter, textLeave }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-2xl py-2 shadow-lg' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center">
          <div className="flex-shrink-0 absolute left-0">
            <Link href="#home" className="text-accent font-bold text-lg sm:text-md text-decoration-line: none">
              <span className="hidden sm:inline">Claudia Yamamoto</span>
              <span className="sm:hidden">CY</span>
            </Link>
          </div>

          <nav className="flex-1 flex justify-center">
            <ul className="flex space-x-4 md:space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm md:text-md hover:text-saccent"
                    onMouseEnter={textEnter} onMouseLeave={textLeave}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex-shrink-0 absolute right-0"> 
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiMoon className="text-accent" size={20} />
              ) : (
                <FiSun className="text-accent" size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}