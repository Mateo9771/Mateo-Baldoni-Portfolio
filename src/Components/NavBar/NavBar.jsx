import React from 'react'
import './NavBar.css'
import { Link } from 'react-scroll'

const NavBar = () => {


  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light" id='Inicio'>
      <h2 className='MB'>MB</h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            
              <div className="navbar-nav">
                <Link className='Link' to='Projects' smooth={true} duration={500}>PROYECTOS</Link>
                <Link className='Link' to='AboutMe' smooth={true} duration={500}> SOBRE MI </Link>
                <Link className='Link' to='Certificates' smooth={true} duration={500}>CERTIFICADOS</Link>
                <Link className='Link' to='Skills' smooth={true} duration={500}>HABILIDADES</Link>
                <Link className='Link' to='Contact' smooth={true} duration={500}>CONTACTO</Link>
              </div>
            </div>
          </nav>
    </>
  )
}

export default NavBar

