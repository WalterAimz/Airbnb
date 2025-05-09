import React from 'react';
import Image from "next/legacy/image";
import {MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
   UserIcon, 
   Bars3Icon  
} from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3
    shadow-md p-5 md:px-10 bg-white'>
        <div  className='relative flex items-center h-10 
        cursor-pointer my-auto'>
          <Image
          src="/logo.jpeg" 
          layout='fill'
          objectFit='contain'
          objectPosition='left'
          />
        </div>
        <div className='flex rounded-full  items-center
         md:border-2 py-2 md:shadow-sm '>
          <input type="text" 
          placeholder='Start your search'
          className='flex-grow h-8 bg-red-500 pl-5
           bg-transparent outline-none
           text-gray-600
           placeholder-gray-400
           '/>
          <MagnifyingGlassIcon
          className='hidden md:inline-flex h-8 bg-red-500
           text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        </div>
        <div className='flex space-x-4 items-center 
        justify-end text-gray-500'>
          <p className='hidden md:inline cursor-pointer'>Become a host </p>
          <GlobeAltIcon  className='h-6' />
          <div className='flex items-center space-x-2 
          border-2 p-2 rounded-full'>
            <Bars3Icon className='h-6'/>
            <UserCircleIcon className='h-6'/> 
          </div>
        </div>
    </header>
  )
}
