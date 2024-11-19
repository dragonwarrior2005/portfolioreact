import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header  from './component/Header'
import { Hero } from './component/Hero'
import { Aboutme } from './component/Aboutme'
import { Photography } from './component/Photography'
function App() {

  return (
    <>
    <Header/>
    <Hero></Hero>
    <Aboutme></Aboutme>
    <Photography></Photography>
      
    </>
  )
}

export default App
