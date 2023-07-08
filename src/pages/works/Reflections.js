import React from 'react';
import {motion} from 'framer-motion';
import {TiArrowForward} from 'react-icons/ti';

function Reflections() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ delay: 0.1}}
    className='w-full'>
        <h3 className="flex gap-1 font-medium ext-xl font-titleFont">React and Next.js Developer <span className="text-textGreen tracking-wide">@Reflections</span></h3>
        <p className="text-sm mt-1 font-medium text-textD ark">May 2023 - July 2023</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>Worked on the development and improvement of the company website revamp, under the Azure cloud platform . 
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>Work in a virtual environment connected through the Microsoft Teams app and explore the virtual machine.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>Learnt Reactjs,Next.js,Tailwind CSS,Typescript
            </li>
        </ul>
    </motion.div>
  )
}

export default Reflections