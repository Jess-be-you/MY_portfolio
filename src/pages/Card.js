import React from 'react';
import {FaRegFolder} from 'react-icons/fa';
import {RxOpenInNewWindow} from 'react-icons/rx';

const Card = ({title,desc,listItem,link1,link2}) => {
  return (
    <div>
        <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-transform duration-300 group">
           <div className="flex justify-between items-center">
           <a href={link1} target="_blank" rel="noreferrer"><FaRegFolder className='text-4xl hover:text-textGreen'/></a>
            <a href={link2} target="_blank" rel="noreferrer"><RxOpenInNewWindow className='text-4xl hover:text-textGreen'/></a>
           </div>
           <div>
            <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
               {title}</h2>
            <p className='text-sm mt-3'>
                {desc}</p>
            </div>
            <ul className='text-xs mdl:text-sm text-textDark flex justify-between items-center flex-wrap gap-2'>
            {
            listItem.map((item,i)=>(
                <li key={i}>{item}</li>
            ))}
            </ul>
        </div>  
    </div>
  )
}

export default Card