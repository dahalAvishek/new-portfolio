import React from 'react'
import Link from "next/link"
import { AiOutlineArrowRight } from 'react-icons/ai'
import '../../style/globals.css'


const ServiceSection = () => {
  return (
    <div className='grid h-fit gap-5 z-10'>
        <p className='text-xl'>Services</p>
        <p className='text-2xl font-bold'>Lets biuld quality products in programming and design with my services</p>
        <a href="https://www.youtube.com/" className='inline-block w-40 text-xl yellow-font hover:border-b-2 hover:scale-110'>show more <AiOutlineArrowRight className='inline'/></a>
    </div>
  )
}

export default ServiceSection