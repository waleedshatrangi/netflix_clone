import React, { useState } from 'react'

function Questions() {
    const [activeIndex,setActiveIndex]=useState(null);
    const handleTogle=(index)=>{
        setActiveIndex(activeIndex === index ? null : index)
    }
    const questionAns=[{
        question:"What is Netflex ?",
        answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quibusdam! Dicta debitis cum soluta error corporis alias perspiciatis nostrum dolore?"

    },
    {
        question:"How much does netflex cost?",
        answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quibusdam! Dicta debitis cum soluta error corporis alias perspiciatis nostrum dolore?"

    },
    {
        question:"Where can i watch it?",
        answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quibusdam! Dicta debitis cum soluta error corporis alias perspiciatis nostrum dolore?"

    },
    
    {
        question:"How do i cancel?",
        answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quibusdam! Dicta debitis cum soluta error corporis alias perspiciatis nostrum dolore?"},

            

       {
        question:"What can i watch on Netflex?",
        answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quibusdam! Dicta debitis cum soluta error corporis alias perspiciatis nostrum dolore?"

    },
        {
        question:"Is Netflex suitable for children?",
        answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quibusdam! Dicta debitis cum soluta error corporis alias perspiciatis nostrum dolore?"

    },
    

    
    

]
return (
    <div className='py-10 pb-20'>
      <div className='text-xl md:text-2xl font-bold mb-4'>Frequently Asked Questions</div>
      {questionAns.map((items, index) => (
        <div key={index} className="mb-2">
          <div onClick={() => handleTogle(index)} 
               className='cursor-pointer text-lg md:text-2xl bg-zinc-800 hover:bg-zinc-700 transition-all p-4 md:p-6 flex justify-between items-center'>
            <div>{items.question}</div>
            <div className='text-3xl md:text-5xl'>{activeIndex === index ? "×" : "+"}</div>
          </div>
          
          <div className={`overflow-hidden transition-all duration-300 bg-zinc-800 px-6 ${activeIndex === index ? "max-h-[500px] py-5 border-t border-black" : "max-h-0"}`}>
            <p className="text-md md:text-xl text-gray-300">{items.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Questions