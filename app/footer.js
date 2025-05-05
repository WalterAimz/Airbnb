import React from 'react'

function footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10
    px-32 py-10 bg-gray-100 text-gray-600'>
        <div  className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works </p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb love</p>
        </div>
        <div  className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibilty</p>
            <p>this is not a real site</p>
            <p>Its a preety awsome clone </p>
            <p>Refferals accepted</p>
            <p>Papafam</p>
        </div>
        <div  className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
            <p>Papa React</p>
            <p>Presents</p>
            <p>Zero to full stack Hero</p>
            <p>Hundreds of Students</p>
            <p>Join Now</p>
        </div>
        <div  className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center </p>
            <p>Trust & Safety</p>
            <p>Say Hi YouTube</p>
            <p>Easter Eggs</p>
            <p>For the min</p>
        </div>
    </div>
  )
}

export default footer