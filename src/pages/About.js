import React from 'react';
import SectionTitle from './SectionTitle';
import {TbBrandHtml5,TbBrandCss3,TbBrandJavascript,TbBrandReact,TbBrandTailwind,TbBrandFirebase} from 'react-icons/tb';
import {SiSolidity,SiHiveBlockchain,SiPython} from 'react-icons/si';
import jess from '../images/jesss.jpeg';

const About = () => {
  return (
    <section 
    id="about"
    className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
   >
        <SectionTitle title="About Me" titleNo="01" />
        <div className="flex flex-col lgl:flex-row gap-16">
            <div 
                className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                <p>I design and build responsive websites for an optimal user experience that achieves your business goals.</p>
                <p>I focus on  my skills in building responsive and functional websites using <span className="text-textGreen">FrontEnd Frameworks</span>.
                I am enthusiastic about exploring the <span className="text-textGreen">decentralized nature and immutability of blockchain</span> and leveraging its benefits to develop secure and efficient solutions
                </p>
                <p>I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
                <p>Here are a <span  className="text-textGreen">few Technologies</span> I have been working with recently:</p>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbBrandHtml5 />
                        </span>HTML5
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbBrandCss3 />
                        </span>CSS3
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbBrandJavascript />
                        </span>JAVASCRIPT
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbBrandReact />
                        </span>REACTJS
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <SiHiveBlockchain />
                        </span>BLOCKCHAIN
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <SiSolidity />
                        </span>SOLIDITY
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbBrandFirebase />
                        </span>FIRESTORE
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbBrandTailwind />
                        </span>TAILWINDCSS
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <SiPython />
                        </span>PYTHON
                    </li>
                   
                </ul>
            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
                <div className="absolute w-full h-80 -left-6  -top-6 rounded-lg">
                    <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                        <img src={jess} 
                        alt="jesmi_profile_image"
                        className='rounded-sm h-full object-cover'
                        />
                        <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'>
                        </div>
                    </div>
                </div>
                <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-3 group-hover:-translate-y-5 transition-transform duration-300'></div>
            </div>
        </div>
    </section>
  )
}

export default About
