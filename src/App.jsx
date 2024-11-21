import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header  from './component/Header'
import { Hero } from './component/Hero'
import { Aboutme } from './component/Aboutme'
import { Photography } from './component/Photography'
import Projects from './component/Projects'
import { Footer } from './component/Footer'
function App() {

  return (
    <>
    <Header/>
    <Hero></Hero>
    <Aboutme></Aboutme>
    <Photography></Photography>
    <Projects></Projects>
    <Footer></Footer>
      
    </>
  )
}

export default App
