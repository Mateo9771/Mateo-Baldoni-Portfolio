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
import { SiVisualstudio } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Front = [
    {
        name: 'HTML',
        icon: <FaHtml5 size='2rem' color='orange'/>,
        category:'frontend'
    },
    {
        name: 'CSS',
        icon: <FaCss3Alt size='2rem' color='blue'/>,
        category:'frontend'
    },
    {
        name: 'Javascript',
        icon: <DiJavascript size='2rem' color='yellow'/>,
        category:'frontend'
    },
    {
        name: 'Bootstrap',
        icon: <FaBootstrap size='2rem' color='violet'/>,
        category:'frontend'
    },
    {
        name: 'Sass',
        icon: <FaSass size='2rem' color='pink'/>,
        category:'frontend'
    },
    {
        name: 'React',
        icon: <FaReact size='2rem' color='#22f8ff'/>,
        category:'frontend'
    },
]

const Back = [
    {
        name:'Node.Js',
        icon: <FaNodeJs size='2rem' color='green'/>,
        category:'backend'
    },
    {
        name:'MySQL',
        icon: <SiMysql size='2rem' color='white'/>,
        category:'backend'
    },
    {
        name:'PHP',
        icon: <SiPhp size='2rem' color='white'/>,
        category:'backend'
    },
   
]

const Tools = [
    {
        name:'VisualStudio',
        icon: <SiVisualstudio size='2rem' color='#1fa1d4'/>,
        category:'tools'
    },
    {
        name:'PostgrSQL',
        icon: <SiPostgresql size='2rem' color='white'/>,
        category:'tools'
    },
    {
        name:'GitHub',
        icon: <FaGithub size='2rem' color='white'/>,
        category:'tools'
    },
    {
        name:'Firebase',
        icon: <IoLogoFirebase size='2rem' color='orange'/>,
        category:'tools'
    }
]

export const getFront = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Front)
        })
    })
}

export const getBack = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Back)
        })
    })
}

export const getTool = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Tools)
        })
    })
}