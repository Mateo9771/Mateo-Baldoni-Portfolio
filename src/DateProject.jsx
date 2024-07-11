import AppTask from './assets/Proyectos/AppTask.mp4'
import ECommerce from './assets/Proyectos/E-Commerce.mp4'
import FanPage from './assets/Proyectos/FanPage.mp4'
import InstitucionSite from './assets/Proyectos/InstitucionalSite.mp4'
import AppFinanzas from './assets/Proyectos/GestorFinanzas.mp4'
import PortfolioDB from './assets/Proyectos/PorfolioDB.mp4'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";

const proyectos = [
    {
        name: 'E-Commerce',
        picture: ECommerce,
        description:'Sitio web de venta electrónica con carrito de compras, filtro por categoría, formulario de contacto y login',
        github: 'https://github.com/Mateo9771/Ecommerce.git',
        skills:[
            <FaHtml5 size='1.5rem' color='orange'/>,
            <FaCss3Alt size='1.5rem' color='blue' />,
            <FaBootstrap size='1.5rem' color='violet'/>,
            <DiJavascript size='1.5rem' color='yellow'/>,
            <FaNpm size='1.5rem' color='width'/>,
            <TbBrandVite size='1.5rem' color='orange'/>,
            <FaReact size='1.5rem' color='#22f8ff'/> 
        ]
    },
    {
        name: 'Portafolio artista',
        picture: PortfolioDB,
        description:'Sitio web personal para artista musical con videos de YouTube de sus actuaciones, enlaces a redes sociales y plataformas de música, y formulario de contacto para facilitar la comunicación con colaboradores.',
        github: 'https://github.com/Mateo9771/Porfolio-Diego-Balbuena.git',
        skills:[
            <FaHtml5 size='1.5rem' color='orange'/>,
            <FaCss3Alt size='1.5rem' color='blue' />,
            <FaBootstrap size='1.5rem' color='violet'/>,
            <DiJavascript size='1.5rem' color='yellow'/>
        ]
    },
    {
        name:'Sitio institucional',
        description:'Sitio institucional, con enlaces a redes sociales, formulario de contacto. Implementación de animaciones, junto con una navegación intuitiva y un diseño responsivo',
        github: 'https://github.com/Mateo9771/DigitalSoftMB.git',
        picture:InstitucionSite,
        skills:[
            <FaHtml5 size='1.5rem' color='orange'/>,
            <FaCss3Alt size='1.5rem' color='blue' />,
            <FaBootstrap size='1.5rem' color='violet'/>,
            <DiJavascript size='1.5rem' color='yellow'/>
        ]
    },
    {
        name: 'FanPage',
        description:'Sitio web de banda musical con animaciones, colores degradados, formularios y enlaces a redes sociales.',
        github: 'https://github.com/Mateo9771/fanpage-ImagineDragons.git',
        picture: FanPage,
        skills:[
            <FaHtml5 size='1.5rem' color='orange'/>,
            <FaCss3Alt size='1.5rem' color='blue' />,
            <FaSass size='1.5rem' color='pink' />,
            <FaBootstrap size='1.5rem' color='violet'/>,
        ]
    },
    {
        name: 'Gestor de Finanzas',
        description:'Aplicación web para la gestión de finanzas personales. Registra transacciones de ingresos y gastos, visualizar totales de entradas y salidas, y calcular el balance total.',
        github: 'https://github.com/Mateo9771/Gestor-de-finanzas.git',
        skills:[
            <FaHtml5 size='1.5rem' color='orange'/>,
            <FaCss3Alt size='1.5rem' color='blue' />,
            <FaBootstrap size='1.5rem' color='violet'/>,
            <DiJavascript size='1.5rem' color='yellow'/>,
        ],
        picture: AppFinanzas,
    }
]

export const getProject = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(proyectos)
        })
    })
}