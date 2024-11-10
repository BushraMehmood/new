import { title } from 'process'
import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id:0,
        title: "Grid Calculator",
        disc: "A Html & Css Based Calculator,I Developed a responsive Grid Calculator using HTML and CSS, showcasing my skills in creating intuitive, functional web layouts. This project emphasizes clean design and efficient code structure for seamless user interaction",
        img: "/gridcalculator.png",
        tags: ["HTML","CSS"],
    },
    {
        id:1,
        title: "Periodic Table",
        disc: "Built an interactive Periodic Table using HTML and CSS, presenting element information in a visually organized layout. This project showcases my skills in CSS grid design and creating structured, responsive layouts for an engaging user experience.",
        img: "/periodicTable.png",
        tags: ["HTML","CSS"],
    },
    {
    id:2,
        title: "Static Interactive Resume",
        disc: "Developed a Static Resume using HTML, CSS, and TypeScript, combining a clean, responsive design with enhanced functionality through TypeScript. This project reflects my focus on creating structured, professional layouts with seamless interactivity.",
        img:"/staticresume.png",
        tags: ["HTML","CSS","Typescript"],
},
{
    id:3,
    title: "Shareable Resume Builder",
    disc: "Developed a Shareable Resume Builder with HTML, CSS, and TypeScript, enabling users to easily create and share professional resumes. This project demonstrates my skills in interactive design and seamless user experience, with a focus on accessibility and modern web standards.",
    img: "/ShareableResumebuilder 1.png",
    tags: ["HTML","CSS","Typscript"],
},
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
     <Heading title='My Projects '/> 
     <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        disc={el.disc}
        img={el.img}
        tags={el.tags}
        />))}
     </div>
    </div>
  )
}

export default Projects
