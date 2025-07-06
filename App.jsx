
import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
