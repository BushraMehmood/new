import React from 'react'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium text-yellow-400'>AboutMe</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'>Projects</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contacts'>Contact</a></li>
            </ul>
            <div className='md:hidden' onClick={toggleMenu}>
            {isMenuOpen} 
            <AiOutlineMenu size={30} />
  
        </div>
        </div>
        
        {isMenuOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden'>
            <li className='menuLink'>
              <a href='#hero' onClick={toggleMenu}>Home</a>
            </li>
            <li className='menuLink'>
              <a href='#about' onClick={toggleMenu}>About</a>
            </li>
            <li className='menuLink'>
              <a href='#project' onClick={toggleMenu}>Project</a>
            </li>
            <li className='menuLink'>
              <a href='#skills' onClick={toggleMenu}>Skills</a>
            </li>
            <li className='menuLink'>
              <a href='#contact' onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        )}
    </div>
  );
};

export default Navbar
