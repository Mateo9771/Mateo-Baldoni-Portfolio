import React from 'react';
import './TimeLine.css';

const Timeline = ({ events }) => {
    return (
        <div className='TimeLine col-9'>

        <div className="timeline">

        {events.map((event, index) => (
          <div key={index} className="TimeLineItem ">

            <div className={`TimeLinePoint ${index === events.length - 1 ? 'current' : ''}`}></div>
            <div className='TimeLinePointCard'>
            <div className="TimeLineContent">
              <h3>{event.title}</h3>
              <p>{event.state} {event.fecha}</p>
              <div className='TimeLineSkill'>{event.description}</div>
            </div>
            <div className='TimeLinePicture'>
             
              <img src={event.img} alt="" />
            
            </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default Timeline;