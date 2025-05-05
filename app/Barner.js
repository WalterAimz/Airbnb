import React from 'react'
import Image from 'next/image'

function Barner() {
  return (
    <div  className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
       <Image
       src='/barner.jpeg'
       layout='fill' 
       objectFit='cover'/>
       <div className='absolute top-1/2 w-full text-center'>
        <p 
        className='text-sm sm:text-lg'>
            Not sure where to go
            </p>
            <button 
            className='text-purple-500
             bg-white py-4 px-10  shadow-md 
             rounded-full font-bold hover:shadow-xl
             active:scale-90 transition duration-150'>I'm Flexible </button>
       </div>
    </div>
  )
}

export default Barner