import React from 'react';
import logo from '../images/logo.png';
import { motion } from 'framer-motion';
// import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div 
         initial={{ opacity: 0}}
         animate={{ opacity: 1}}
         transition={{ duration: 0.5}}>
          <img className='w-14' src={logo} alt="" />
        </motion.div>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className="flex text-[14px] gap-7">
            <a href="#home" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li
                 initial={{ y: -10, opacity: 0 }}
                 animate={{ y: 0,opacity: 1}}
                 transition={{ duration: 0.1 }}>
                Home</motion.li></a>
              <a href="#about" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0,opacity: 1}}
              transition={{ duration: 0.1 ,delay:0.1}}>
                <span className='text-textGreen'>01.</span>About</motion.li></a>
              <a href="#experience" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0,opacity: 1}}
                transition={{ duration: 0.1 ,delay:0.1}}>
                <span className='text-textGreen'>02.</span>Experience</motion.li></a>
              <a href="#project" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0,opacity: 1}}
                transition={{ duration: 0.1 ,delay:0.1}}>
                  <span className='text-textGreen'>03.</span>Project</motion.li></a>
              <a href="#contact" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0,opacity: 1}}
                transition={{ duration: 0.1 ,delay:0.1}}>
                  <span className='text-textGreen'>04.</span>Contact</motion.li></a>
          </ul>
          <a href="/public/Jesmi (1).pdf" target="_blank">
          <motion.button
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 0.5}}
            className='px-4 py-2 rounded-md text-textGreen text-[14px] border border-textGreen hover:bg-hoverColor duration-300'
            >Resume</motion.button>
          </a>
        </div>
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
              <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
              <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
              <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
      </div>
  )
}

export default Navbar