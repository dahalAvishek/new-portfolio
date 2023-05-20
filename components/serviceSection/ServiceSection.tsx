import React from 'react'
import Link from "next/link"
import { AiOutlineArrowRight } from 'react-icons/ai'
import '../../style/globals.css'


const ServiceSection = () => {
  return (
    <div className='grid h-fit gap-5'>
        <p className='text-xl'>Services</p>
        <p className='text-2xl font-bold'>Lets biuld quality products in programming and design with my services</p>
        <Link href="https://www.youtube.com/" className='text-xl yellow-font'>show more <AiOutlineArrowRight className='inline'/></Link>
    </div>
  )
}

export default ServiceSection