import React from 'react';
import './Skills.css'


const Skills = ({allSkills}) => {
  
  const renderSkills = (category) => {
    return allSkills
      .filter(skill => skill.category === category)
      .map((skill, index) => (
        <div key={index} className='SkillIcon'>
          {skill.icon}
        </div>
      ));
  };


  return (
    <div className='Skills col-9'>
      <div className='SkillsFront'>
        <h3>Frontend</h3>
        <div className='SkillIcons'>
          {renderSkills('frontend')}
        </div>
      </div>
      <div className='SkillsBack'>
        <h3>Backend</h3>
        <div className='SkillIcons'>
          {renderSkills('backend')}
        </div>
      </div>
      <div className='SkillsTool'>
        <h3>Herramientas de desarrollo</h3>
        <div className='SkillIcons'>
          {renderSkills('tools')}
        </div>
      </div>
    </div>
  )
}

export default Skills
