import React from 'react'
import Image from "next/legacy/image"
function smallCard({img, location,  distance}) {
  return (
    <div className='flex items-center m-2 mt-2 rounded-xl 
    space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 
    transition transorm duration-200 ease-out'>
     <div className='relative h-16 w-16'>
        <Image src={img} layout='fill' className='rounded-lg '/>
     </div>

     
     <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
     </div>
    </div>
  )
}

export default smallCard