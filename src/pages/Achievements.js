import React from 'react';
import Card from "./Card";

function Achievements() {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
        <div className='w-full flex flex-col items-center'>
            <h2 className="text-3xl font-titleFont font-semibold">Achievements & Other Projects</h2>
            <p className="text-sm text-textGreen font-titleFont cursor-pointer">View the Archive</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <Card 
            title="National Level Hackathon"
            desc="Secured 1st position in National Level Hackathon.Conducted by Nitte Meenakshi Institute of Technology,Banglore"
            listItem={["NMIT HACKS","2023"]}
            link1="https://certificate.givemycertificate.com/c/72f87320-e21e-4cd1-a3b2-8195c74f8d22"
            link2="https://github.com/Jess-be-you/pharma_trust"
            />
             <Card 
            title="Spotify Clone"
            desc="A beginner project done as apart of a 30 days webCon BootCamp conducted by TinkerHub."
            listItem={["WebCon","2023"]}
            link1=" https://jess-be-you.github.io/Spotify-Clone/"
            link2="https://github.com/Jess-be-you/Spotify-Clone"
            />
             <Card 
            title="A simple Enquiry Form"
            desc="First Javascript project.Form is built with necessary details and make it functionable"
            listItem={["HTML","JS","CSS"]}
            link1="https://jess-be-you.github.io/Enquiry-Form/"
            link2="https://github.com/Jess-be-you/Enquiry-Form"
            />
        </div>
    </div>
  )
}

export default Achievements