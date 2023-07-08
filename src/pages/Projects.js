import React from 'react';
import SectionTitle from './SectionTitle';
import CoverPage from '../images/CoverPage.png';
import mediconnect from '../images/mediconnect.png';
import web3 from '../images/web3.png';
import {TbBrandGithub} from 'react-icons/tb';

function Projects() {
  return (
    <section 
    id="project"
    className="max-w-container mx-auto lgl:px-20 py-24"
    >
        <SectionTitle title="My Projects" titleNo="03" />
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
            <div className="flex flex-col xl:flex-row gap-6">
                <a 
                className='w-full xl:w-1/2 h-auto relative group'
                href="https://github.com/Jess-be-you/pharma_trust" target="_blank" rel="noreferrer">
                <div>
                    <img src={CoverPage} alt="PharmaTrustImg" 
                    className="w-full h-full object-contain"
                    ></img>
                    {/* <div className="absolute w-full h-auto bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div> */}
                    </div>
                    </a>
                   <div
                    className='w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10'>
                    <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Projects</p>
                    <h3 className='text-2xl font-bold'>BlockChain Project</h3> 
                    <p className=' text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md'>Detect counterfeiting in the drug supply chain. Smart contracts were developed using Solidity, and client-side interfaces were created using React.js. The integration was achieved through web3.js.
                        <span><a href="https://github.com/Jess-be-you/pharma_trust" target="_blank" rel="noreferrer"><TbBrandGithub /></a></span>
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>Solidity</li>
                        <li>Web3js</li>
                        <li>ReactJs</li>
                        <li>Ethereum</li>
                    </ul>
                    </div>
            </div>
            <div className="flex flex-col xl:flex-row-reverse gap-6">
                <a 
                className='w-full xl:w-1/2 h-auto relative group'
                href="https://github.com/Jess-be-you/Mediconnect" target="_blank" rel="noreferrer">
                    <div>
                    <img src={mediconnect} alt="PharmaTrustImg" 
                    className="w-full h-full object-contain"
                    ></img>
                    </div></a>
                <div
                    className='w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right z-10'>
                    <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Projects</p>
                    <h3 className='text-2xl font-bold'>React Firestore Project</h3> 
                    <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>Website aims to prioritize the timely availability of doctors,transcending the role of a mere record.Developed as a part Hack-A-Week 2.0  by IEEE using Reactjs.
                        <span><a href="https://github.com/Jess-be-you/Mediconnect" target="_blank" rel="noreferrer"><TbBrandGithub /></a></span>
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>ReactJs</li>
                        <li>Firebase</li>
                        <li>Tailwind Css</li>
                    </ul>
                </div>  
            </div>
            <div className="flex flex-col xl:flex-row gap-6">
                <a 
                className='w-full xl:w-1/2 h-auto relative group'
                href="https://github.com/Jess-be-you/Krypy_Web_3_" target="_blank" rel="noreferrer">
                    <div>
                    <img src={web3} alt="Web3ProjectImg" 
                    className="w-full h-full object-contain"
                    ></img>
                    </div></a>
                <div
                    className='w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                    <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Projects</p>
                    <h3 className='text-2xl font-bold'>WEB3 Project</h3> 
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>The main focus is to get to know about how transactions in web3 happens and usage of basic dependencies of blockchain world.
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>ReactJs</li>
                        <li>Solidity</li>
                        <li>Tailwind Css</li>
                    </ul>
                </div>  
            </div>     
        </div>
    </section>
  )
}

export default Projects