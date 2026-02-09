import React from 'react'
import trend1 from './assets/trend1.webp'
import trend2 from './assets/trend2.webp'
import trend3 from './assets/trend3.webp'
import trend4 from './assets/trend4.webp'
import trend5 from './assets/trend5.webp'
import trend6 from './assets/trend6.webp'
import trend7 from './assets/trend7.webp'
import trend9 from './assets/trend9.webp'
import trend10 from './assets/trend10.webp'

function Trends() {
    const movies=[

            {
        "id":1,
        "url":trend1
    },
        {
        "id":2,
        "url":trend2
    },
        {
        "id":3,
        "url":trend3
    },
        {
        "id":4,
        "url":trend4
    },
        {
        "id":5,
        "url":trend9
    },
   
        {
        "id":7,
        "url":trend7
    },
        {
        "id":8,
        "url":trend5
    },
        {
        "id":9,
        "url":trend6
    },
      {
        "id":10,
        "url":trend10
    },
]
return (
    <div className='pt-10'>
      <div className='font-bold text-xl md:text-2xl mb-4'>Trending Now</div>
      <div className='flex gap-4 md:gap-10 overflow-x-auto hide-scrollbar pb-10'>
        {movies.map((movie, index) => (
          <div key={index} className='relative shrink-0'>
            {/* Mobile pe image width thodi kam (150px) desktop pe zyada (200px) */}
            <img className='rounded-xl w-[150px] md:w-[200px]' src={movie.url} alt=""/>
            <div className='text-7xl md:text-9xl font-bold absolute bottom-0 left-[-10px] text-stroke-white'>
              {movie.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Trends



