import { useState } from 'react'

import {Hero, About, Projects, Experience, Contact} from '@/sections';
import { Navbar, Footer } from '@/layouts';

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
