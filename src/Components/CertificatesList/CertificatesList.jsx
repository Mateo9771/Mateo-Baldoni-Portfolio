import React from 'react'
import './CertificatesList.css'
import Timeline from '../TimeLine/TimeLine'
import { getCertificates } from '../../DateCertificates';
import { useEffect, useState } from 'react';


const CertificatesList = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
      getCertificates().then(data => {
          setCertificates(data);
      });
  }, []);

  return (
    <div className='CertificatesList col-12' id='Certificates'>
      <h1>Certificaciones</h1>
       <Timeline events={certificates}/>
    </div>
  )
}

export default CertificatesList
