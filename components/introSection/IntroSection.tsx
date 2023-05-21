import React from 'react'
import 'tailwindcss/tailwind.css';
import '../../style/globals.css'

const IntroSection = () => {
  return (
    <div className='pt-36 grid gap-8'>
        <p className='text-5xl leading-8 extra-font'>I'm</p>
        <h1 className='text-7xl font-bold'>
            Avishek Dahal
        </h1>
        <div className='w-20 h-0 breaker'></div>
        <p className='text-xl w-2/5 extra-font'> A freelancer who provides services for digital programming and design content needs, for all businessman with more than 10 years of experience</p>
    </div>
  )
}

export default IntroSection