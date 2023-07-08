import React from 'react';
import {PiHandWaving} from 'react-icons/pi';


const Contact = () => {
  return (
    <section id="contact"
    className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
        <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        Love having Connections...</p>
        <h2 className='text-3xl font-titleFont lgl:text-5xl font-semibold'>Get In Touch</h2>
        <p className='max-w-[600px] text-center text-textDark'>
        "Feel free to reach out to me through the provided contact information, and I am actively seeking new opportunities and open to collaborations. Reach out to explore how we can create something remarkable together"        </p>
        <a href="mailto:jesmijose282@gmail.com">
  <button className='px-4 py-2 rounded-md text-textGreen font-titleFont text-[20px] border border-textGreen hover:bg-hoverColor duration-300 flex items-center gap-2'>
    Say Hi
    <span className="text-textGreen">
      <PiHandWaving />
    </span>
  </button>
</a>

    </section>
  )
}

export default Contact