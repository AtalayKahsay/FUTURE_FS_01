import { useState } from 'react'

import {Hero, About, Projects, Experience, Testimonials, Contact} from '@/sections';
import { Navbar } from '@/layouts';

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App
