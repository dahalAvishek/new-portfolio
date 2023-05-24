import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'
import "../../style/globals.css"

const MyProjects = () => {
  const Projects= [
    {
      name: "Project-1",
      source: "https://www.hitedigital.com/wp-content/uploads/2021/11/Choosing-the-right-number-of-web-pages-980x515.png",
      description: "Project-1 description"
    },
    {
      name: "Project-2",
      source: "https://www.hitedigital.com/wp-content/uploads/2021/07/1-copy.jpg",
      description: "Project-1 description"
    },
    {
      name: "Project-3",
      source: "https://www.hitedigital.com/wp-content/uploads/2021/11/DSC04952-min-980x653.jpg",
      description: "Project-1 description"
    }
  ]
  return (
    <div className='flex flex-col gap-8 md:gap-2 md:w-full '>
      {Projects.map(project => (
      <div className='py-2 px-2 flex items-center gap-6 w-full hover:shadow-outer hover:scale-105 md:w-full' key={project.name}>
        <div className='w-60 h-36 object-cover relative md:w-48 md:h-28'>
          <Image  
            fill
            src={project.source}
            alt={project.description}
            // width={300}
            // height={100}
          />
        </div>
        <div className='basis-1/2 shrink-1'>
          <h2 className='text-4xl'>{project.name}</h2>
          <p className='text-xl'>{project.description}</p>
        </div>
        <AiOutlineArrowRight className='text-4xl yellow-font' />
      </div>
      ))}
    </div>
  )
}

export default MyProjects