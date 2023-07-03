import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section
    id="home"
    className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
        <motion.h3 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0,opacity: 1}}
        transition={{ duration: 0.5 ,delay:0.6}}
        className="text-lg font-titleFont tracking-wide text-textGreen">
            Hi, my name is
        </motion.h3>
        <motion.h1
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0,opacity: 1}}
         transition={{ duration: 0.5 ,delay:0.7}}
         className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'>
            Jesmi PJ.{""}
            <span className="text-textDark mt-2 lgl:mt-4">
                Why do we use it?</span></motion.h1>
                <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0,opacity: 1}}
                transition={{ duration: 0.5 ,delay:0.8}}
                className='text-base md:max-w-[650px] text-textDark font-medium'
                >
                    {" "}
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
                <a href="https://github.com/Jess-be-you" target="_blank" rel="noreferrer">
                    <span
                    className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                        Learn more
                        <span
                        className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'
                        ></span>
                        </span></a>
                </motion.p>
                <motion.button 
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0,opacity: 1}}
                 transition={{ duration: 0.5 ,delay:0.9}}
                className='w-52 h-14 text-sm font-titleFont rounded-md text-textGreen border border-textGreen tracking-wide hover:bg-hoverColor duration-300'>Check out my projects</motion.button>
    </section>
  )
}

export default Banner