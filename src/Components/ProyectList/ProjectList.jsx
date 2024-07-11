import React from 'react'
import './ProjectList.css'
import Project from '../Proyect/Project'
import { getProject } from '../../DateProject'
import { useEffect, useState } from 'react'

const ProjectList = () => {
  const [projects, setProjects] = useState ([])
  
  
  useEffect(() => {
    getProject().then(data => {
        setProjects(data);
    });
}, []);

  return (
    <div className='ProjectList col-12' id='Projects'>
    <h1>Proyectos</h1>
    <Project events={projects}/>
    
    </div>
  )
}

export default ProjectList
