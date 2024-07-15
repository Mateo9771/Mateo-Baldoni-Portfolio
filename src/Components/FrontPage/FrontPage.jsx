import React from 'react'
import './FrontPage.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import ScrollIndicator from '../ScrollIndicador/ScrollIndicador';
import { Link } from 'react-scroll';
import Photo from '../../assets/Photo.png'

const FrontPage = () => {
  return (
    <div className='FrontPage col-12'>
        <div className='FontPageCenter col-9'>
          {/*<div className='Photo'>
            <img src={Photo} alt="" />
          </div>*/}
            <div className='FrontPageTitle'>
            <p>Hola! Soy <span>Mateo</span></p>
            <h1>Web Developer</h1>
            </div>
            <div className='FrontPageButton'>
          <div>
          <a href='https://www.linkedin.com/in/mateo-baldoni-5726791b7/' target='_blank'>
          <CiLinkedin size='30px' color='white'/>
          </a>
        </div>
            <div>
              <a href="https://github.com/Mateo9771" target='_blank'>
              <FaGithub size='30px' color='white'/>
                </a></div>
            </div>
            
        </div>
        <ScrollIndicator/>
    </div>
  )
}

export default FrontPage
