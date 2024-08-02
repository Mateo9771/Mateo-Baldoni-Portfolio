import React from 'react'
import './CertificatesList.css'
import Timeline from '../TimeLine/TimeLine'
import { getCertificates, getCertificatesTec } from '../../DateCertificates';
import { useEffect, useState } from 'react';


const CertificatesList = () => {
  const [certificates, setCertificates] = useState([]);
  const [tecCertificates, setTecCertificates] = useState([]);

  useEffect(() => {
      getCertificates().then(data => {
          setCertificates(data);
      });
      getCertificatesTec().then(data => {
        setTecCertificates(data);
      });
  }, []);

  return (
    <div className='CertificatesList col-12' id='Certificates'>
      <h1>Formación Academica</h1>
      <h2>Terciario</h2>
      <Timeline events={tecCertificates} />
      <h2>Certificaciones</h2>
       <Timeline events={certificates}/>
    </div>
  )
}

export default CertificatesList
