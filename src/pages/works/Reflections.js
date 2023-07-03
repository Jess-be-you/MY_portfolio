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
        <h3 className="flex gap-1 font-medium ext-xl font-titleFont">React Developer <span className="text-textGreen tracking-wide">@Reflections</span></h3>
        <p className="text-sm mt-1 font-medium text-textD ark">May 2023 - July 2023</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>Contrary to popular belief, Lorem Ipsum is not simply random text
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
            </li>
        </ul>
    </motion.div>
  )
}

export default Reflections