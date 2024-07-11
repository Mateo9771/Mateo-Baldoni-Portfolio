import React from 'react'
import './SkillsList.css'
import Skills from '../Skills/Skills'
import { getFront, getBack, getTool } from '../../DateSkills'
import { useState, useEffect } from 'react'

const SkillsList = () => {
  const [iconFront, setIconFront] = useState ([])
  const [iconBack, setIconBack] = useState ([])
  const [iconTool, setIconTool] = useState ([])


  useEffect(() => {
    Promise.all([getFront(), getBack(), getTool()]).then(([frontData, backData, toolData]) => {
      setIconFront(frontData);
      setIconBack(backData);
      setIconTool(toolData);
    });
  }, []);

  const allSkills = [...iconFront, ...iconBack, ...iconTool];

  return (
    <div className='SkillsList col-12' id='Skills'>
        <Skills allSkills={allSkills}/>
    </div>
  )
}

export default SkillsList

