import React from 'react'
import './Project.css'
import { useEffect, useState } from 'react'

const Project = ({events}) => {

  const[isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [] )


  return (
   <div className='Project col-9'>

      {events.map((event, index) =>

      <div key={index} className="ProjectCard ">  
      
      <div className='ProjectDescription'>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        {event.github && (
                  <p>
                    <a href={event.github} target="_blank" rel="noopener noreferrer">
                      Ver en GitHub
                    </a>
                  </p>)}
        <p>{event.skills}</p>
      </div>
    
      <div className='ProjectPicture'>
      {isMobile ? (
              <a href={event.picture} target="_blank" rel="noopener noreferrer">
                Ver video
              </a>
            ) : (
              <video src={event.picture} className='HiddenVideo' controls width="100%" height="auto"></video>
            )}
      </div>

      </div>)}
   </div> 
  )
}

export default Project
