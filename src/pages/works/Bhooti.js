import React from 'react';
import {motion} from 'framer-motion';
import {TiArrowForward} from 'react-icons/ti';

function Bhooti() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ delay: 0.1}}
    className='w-full'>
        <h3 className="flex gap-1 font-medium ext-xl font-titleFont">Web Developer<span className="text-textGreen tracking-wide">@Bhooti</span></h3>
        <p className="text-sm mt-1 font-medium text-textD ark">October 2023-present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>A project called Bhooti with the mission to help an average individual improve his or her health
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>Working as an FrontEnd Intern and Exploring some backend aspects
            </li>
            {/* <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
            </li> */}
        </ul>
    </motion.div>
  )
}

export default Bhooti