import React from 'react';
import Card from "./Card";

function Achievements() {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
        <div className='w-full flex flex-col items-center'>
            <h2 className="text-3xl font-titleFont font-semibold">Achievements & Activities</h2>
            <p className="text-sm text-textGreen font-titleFont cursor-pointer">View the Archive</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <Card 
            title="Where can I get some?"
            desc="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
            listItem={["English","1924"]}
            link1="https://drive.google.com/file/d/14hJcOhOeXH0lawHvWyQSUu-helPsXakC/view?usp=drivesdk"
            link2="https://github.com/Jess-be-you/pharma_trust"
            />
             <Card 
            title="Where can I get some?"
            desc="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
            listItem={["English","1924"]}
            link1="https://drive.google.com/file/d/14hJcOhOeXH0lawHvWyQSUu-helPsXakC/view?usp=drivesdk"
            link2="https://github.com/Jess-be-you/pharma_trust"
            />
             <Card 
            title="Where can I get some?"
            desc="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
            listItem={["English","1924"]}
            link1="https://drive.google.com/file/d/14hJcOhOeXH0lawHvWyQSUu-helPsXakC/view?usp=drivesdk"
            link2="https://github.com/Jess-be-you/pharma_trust"
            />
        </div>
    </div>
  )
}

export default Achievements