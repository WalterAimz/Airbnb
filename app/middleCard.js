import React from 'react'
import Image from "next/legacy/image"

function middleCard({title,img}) {
  return (
    <div className='cursor-pointer hover:scale-105 duration-300
    tansition transorm ease-out'>
      <div className='relative h-80 w-80'>
        <Image src={img}layout='fill'
        className='rounded-xl'/>
      </div>
      <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default middleCard