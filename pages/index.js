
import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: 'var(--cursor-color)',
    },
    text: {
      height: 30,
      width: 30,
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      backgroundColor: 'var(--cursor-hover)',
      mixBlendMode: darkMode ? "screen" : "multiply",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  }

  const textEnter = useCallback(() => setCursorVariant("text"), []);
  const textLeave = useCallback(() => setCursorVariant("default"), []);


  useEffect(() => {
    setMounted(true)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <div>
      <div className={`${darkMode ? 'dark' : 'light'}`}>
      
      <motion.h1
      onMouseEnter={() => setCursorVariant("text")} 
      onMouseLeave={() => setCursorVariant("default")} 
      > 
      </motion.h1>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />

      <Head>
        <title>Claudia Yamamoto</title>
        <meta name="description" content="The portfolio website of an awesome multidiplinary computer programmer" />
      </Head>

      <Header 
        textEnter={textEnter} 
        textLeave={textLeave}
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        />
      
      <main>
        <Hero 
          textEnter={textEnter} 
          textLeave={textLeave}
        />
        <Projects />
        <About
          textEnter={textEnter} 
          textLeave={textLeave} 
        />
        <Contact 
          textEnter={textEnter} 
          textLeave={textLeave}
          />
      </main>

      <Footer />
      </div>
    </div>
    )
}