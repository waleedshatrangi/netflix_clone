import React from 'react'
import { MdDownload } from "react-icons/md";
import { LuMonitorPlay } from "react-icons/lu";
import { GoTelescope } from "react-icons/go";
import { GiWatchtower } from "react-icons/gi";
import { RiStarSmileLine } from "react-icons/ri";

function Reasons() {
    const reasons=[

        {
            "title":"Enjoy on your own TV",
            "detail":"Watch on Smart TV's PlayStation, Xbox, ChromeCast, Apple TV, Blueray players and more",
            "icon":<LuMonitorPlay/>

    },
        {
            "title":"Download series and programs to watch offline",
            "detail":"Easily save your favorite shows so you can always watch what you want",
            "icon":<MdDownload />

    },
        {
            "title":"Watch anywhere",
            "detail":"Watch countless movies, series and programs on your phone, tablet, laptop or even on your ",
            "icon":<GiWatchtower />


    },
         {
            "title":"Creating profiles for children",
            "detail":"Unleash your children to embark on exciting adventures with their beloved characters in a personalized experience - free with your membership",
            "icon":<RiStarSmileLine />

    },
]
return (
    <div className='mt-10'>
      <div className='font-bold text-xl md:text-2xl mb-5'>
        More reasons to join
      </div>
      
      {/* Grid setup for responsiveness */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {reasons.map((item, index) => (
          <div key={index} className='relative h-[220px] md:h-[280px] rounded-2xl p-5 bg-gradient-to-b from-blue-950 to-gray-900'>
            <div className='font-bold text-[18px] md:text-[20px]'>
              {item.title}
            </div>
            <div className='py-3 text-gray-400 text-[13px] md:text-[14px]'>
              {item.detail}
            </div>
            <div className='text-5xl md:text-7xl right-4 bottom-4 absolute opacity-60'>
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Reasons