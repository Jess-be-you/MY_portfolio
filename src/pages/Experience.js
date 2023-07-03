import React,{useState} from 'react';
import SectionTitle from './SectionTitle';
import Reflections from './works/Reflections';
// import Company from './works/Company';


const Experience= () =>{

    const [workReflections,setWorkReflections]=useState(true);
    // const [workCompany,setWorkCompany]=useState(false);

    const handleReflections=() =>{
        setWorkReflections(true);
        // setWorkCompany(false);
    };
    // const handleCompany=() =>{
    //     setWorkReflections(false);
    //     setWorkCompany(true);
    // };

  return (
    <section
    id="experience"
    className="max-w-containers mx-auto py-10 lgl:py-24 px-4"
    >
        <SectionTitle title="Where I have Worked" titleNo="02" />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
            <ul className="md:w-32 flex flex-col">
                <li 
                onClick={handleReflections}
                className={`${workReflections 
                ? "border-l-textGreen text-textGreen" 
                : "border-l-hoverColor text-hoverColor "}
                border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                    Reflections</li>
                {/* <li 
                onClick={handleCompany}
                className={`${workCompany
                ? "border-l-textGreen text-textGreen" 
                : "border-l-textDark text-textDark "}
                border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                    Company</li> */}
            </ul>
            {workReflections && <Reflections />}
            {/* {workCompany && <Company />} */}
        </div>
    </section>
  )
}

export default Experience