import React from 'react'
import NavBar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto relative'>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App