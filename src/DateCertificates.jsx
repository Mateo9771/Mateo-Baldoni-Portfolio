import Ademika from './assets/certificados/Certificados dev/CertificateDesarrolloWebFullStack.webp'
import CoderhouseDW from './assets/certificados/Certificados dev/CertificateDesarrolloWeb.webp'
import CoderhouseJS from './assets/certificados/Certificados dev/CertificateJavaScript.webp'
import CoderhouseR from './assets/certificados/Certificados dev/CertificateReact.webp'
import CoderhouseFER from './assets/certificados/Certificados dev/CertificateFrontEndReact.webp'
import Locked from './assets/Locked.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNpm } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Certificates = [
    {
       title: 'Desarrollo web Full Stack',
       institucion: 'Ademika', 
       state:'Finalizado',
       fecha: '20/06/2023',
       description: [
            <FaHtml5 color='orange' size='1.5rem'/>,
            <FaCss3Alt color='blue' size='1.5rem' />,
            <DiJavascript color='yellow' size='1.5rem' />,
            <SiPhp color='white' size='1.5rem' />,
            <SiMysql color='white' size='1.5rem'/>,
            <FaBootstrap color='violet' size='1.5rem' />

        ],
            
       img: Ademika,
    },
    {
        title: 'Desarrollo web',
       institucion: 'Coderhouse', 
       state:'Finalizado',
       fecha: '18/11/2023',
       description: [
            <FaHtml5  color='orange' size='1.5rem'/>,
            <FaCss3Alt color='blue' size='1.5rem' />,
            <FaSass color='pink' size='1.5rem'/>,
            <FaBootstrap color='violet' size='1.5rem' />,
            <FaGithub color='white' size='1.5rem'/>
       ],
       img: CoderhouseDW,    
    },
    {
        title: 'Javascript',
       institucion: 'Coderhouse', 
       state:'Finalizado',
       fecha: '17/02/2024',
       description: [
                <DiJavascript color='yellow' size='1.5rem' />,
                <FaGithub color='white' size='1.5rem'/>
       ],
       img: CoderhouseJS,
    },
    {
        title: 'React.js',
       institucion: 'Coderhouse', 
       state:'Finalizado',
       fecha: '11/05/2024',
       description: [
            <FaReact color='#22f8ff' size='1.5rem'/>,
            <FaGithub  color='white' size='1.5rem'/>,
            <IoLogoFirebase  color='orange' size='1.5rem'/>,
            <FaNpm  color='white' size='1.5rem' />,
            <FaNodeJs  color='green' size='1.5rem' />,
            <TbBrandVite color='orange' size='1.5rem' />

       ],
       img: CoderhouseR,
    },
    {
        title: 'Carrera Front End React',
       institucion: 'Coderhouse', 
       state:'Finalizado',
       fecha: '11/05/2024',
       description: [
            <FaHtml5  color='orange' size='1.5rem'/>,
            <FaCss3Alt  color='blue' size='1.5rem' />,
            <FaSass  color='pink' size='1.5rem'/>,
            <FaBootstrap  color='violet' size='1.5rem' />,
            <FaGithub  color='white' size='1.5rem'/>,
            <TbBrandVite color='orange' size='1.5rem' />,
            <FaNpm color='white' size='1.5rem' />,
            <FaNodeJs  color='green' size='1.5rem' />,
            <IoLogoFirebase  color='orange' size='1.5rem'/>,
            <FaReact  color='#22f8ff' size='1.5rem'/>,
            <DiJavascript  color='yellow' size='1.5rem' />
       ],
       img: CoderhouseFER,
    },
    {
        title: 'SQL',
       institucion: 'Coderhouse', 
       state:'Inicio',
       fecha: '05/08/2024',
       description: '',
       img: Locked
    }
]

const Tecnico = [
    {
        title: 'Tecnicatura superior en programación',
        institucion: 'TECLAB', 
        category:'tecnico',
        state:'En curso',
        fecha: '04/04/2023',
        description: [
            <SiCplusplus size='1.5rem' color='#1fa1d4'/>,
            <SiPostgresql size='1.5rem' color='white'/>,
            <SiMysql color='white' size='1.5rem'/>
         ],
             
        img: Locked,   
    }
]

export const getCertificates = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Certificates)
        })
    })
}

export const getCertificatesTec = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Tecnico)
        })
    })
}