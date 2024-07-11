import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='BlockFooter'>
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
        <div className='BlockFooter '>
            <p>Todos los derechos reseravados Mateo Baldoni</p>
        </div>
        <div className='BlockFooter'>
        <Link className='Link' to='Inicio' smooth={true} duration={500}>Inicio</Link>
        <Link className='Link' to='Projects' smooth={true} duration={500}>Proyectos</Link>
        <Link className='Link' to='AboutMe' smooth={true} duration={500}>Sobre Mi</Link>
        <Link className='Link' to='Skills' smooth={true} duration={500}>Habilidades</Link>
        <Link className='Link' to='Contact' smooth={true} duration={500}>Contacto</Link>
        </div>
    </div>
  )
}

export default Footer
