import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id= "hero" className='min-h-screen bg-no-repeat bg-[url(/profilepic.png)]  bg-cover'
    style={{backgroundSize:"35%",backgroundPosition:"right 100px top 130px "}} >
      
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:-black
        '></div>
        <div className='text-[20px] sm:text-[20px]  leading-tight flex justify-center items-center'>
            <div>
                <p className='text-xl font-medium text-yellow-400'>Hello,Welcome</p><br></br>
                <p className='text-[30px] sm:text-[50px] flex justify-right items-center font-bold' >I,m Bushra Mehmood</p><br></br>
                
                <p className='text-[20px] sm:text-[15px] flex justify-right items-center text-grey-900'>A passionate web developer and problem-solver with a keen eye for clean design and efficient code. My journey in development has led me to create innovative projects, like a shareable resume builder using HTML, CSS, and TypeScript. I’m always excited to explore new technologies and improve user experiences, bringing creativity and functionality together in every project. Here, you’ll find a showcase of my work, from web applications to custom design projects. Let’s connect and see how we can build something amazing together!</p>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Hero
