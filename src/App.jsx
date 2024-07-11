import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import FrontPage from './Components/FrontPage/FrontPage'
import ProjectList from './Components/ProyectList/ProjectList'
import AboutMe from './Components/AboutMe/AboutMe'
import CertificatesList from './Components/CertificatesList/CertificatesList'
import SkillsList from './Components/SkillsList/SkillsList'
import FormContact from './Components/FormContact/FormContact'
import Footer from './Components/Footer/Footer'
import Timeline from './Components/TimeLine/TimeLine'
import LogoWhatt from './Components/LogoWhatt/LogoWhatt'



function App() {


  return (
    <div className='App'>
      <NavBar/>
      <FrontPage/>
      <AboutMe/>
      <ProjectList/>  
      <CertificatesList/>
      <SkillsList/>
      <FormContact/>
      <LogoWhatt/>
      <Footer/>
    </div>
  )
}

export default App
