import React from 'react'
import Image from 'next/image'

const Projects = [
  {
    name: "Project-1",
    description: "Project Description Goes here",
    url: "https://www.google.com",
    image: "https://img.freepik.com/free-photo/creative-cloud-concept-glass-cube-cloudscape-digital-metaverse-infrastructure_90220-1366.jpg?w=740&t=st=1684856444~exp=1684857044~hmac=588753cbdab0972dc701556ca301a50d2d2699686d40945cf231379d1d6f8cd7"
  },
  {
    name: "Project-2",
    description: "Project Description Goes here",
    url: "https://www.google.com",
    image: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=996&t=st=1684856471~exp=1684857071~hmac=a2f39bf21ebfb791141bcbcc025f9b1bd1c4e8b8e5eeef0adcc22e1839b136e1"
  },
  {
    name: "Project-3",
    url: "https://www.google.com",
    description: "Project Description Goes here",
    image: "https://img.freepik.com/free-photo/abstract-background-with-low-poly-design_1048-8478.jpg?w=996&t=st=1684856501~exp=1684857101~hmac=00bfe71e99ac7ab9b8651e796b6577de11b46c5340a44357033b64d1fddd286a"
  },
  {
    name: "Project-4",
    url: "https://www.google.com",
    description: "Project Description Goes here",
    image: "https://img.freepik.com/premium-photo/futuristic-hallway-with-bright-light-end-generative-ai_410516-63607.jpg?w=996"
  },
  {
    name: "Project-5",
    url: "https://www.google.com",
    description: "Project Description Goes here",
    image: "https://img.freepik.com/free-photo/creative-light-bulb-abstract-glowing-blue-background-generative-ai_188544-8090.jpg?w=740&t=st=1684856554~exp=1684857154~hmac=92b4327b4a1db6780addd9b5f0f58f4fe6373e73591c2591dee35c928880df3d"
  },
  {
    name: "Project-6",
    url: "https://www.google.com",
    description: "Project Description Goes here",
    image: "https://img.freepik.com/free-photo/teenager-dressed-white-t-shirt-using-virtual-reality-glasses-with-graph-charts-numbers-lines-technology-concept_613910-5097.jpg?w=996&t=st=1684856579~exp=1684857179~hmac=aa4859a0e2e2644dfb3091ec731cd2cba43bc4fe6a1b63481f25249accf1c4f3"
  },
]

const ProjectsContent = () => {
  return (
    <div className='flex flex-wrap justify-between items-center'>
      {Projects.map(project => (
        <a className='h-40 py-2 px-2 flex flex-row flex-wrap items-center hover:shadow-outer hover:scale-105' key={project.name} href={project.url}>
          <div className='w-40 h-36 object-cover relative'>
            <Image  
              fill
              src={project.image}
              alt={project.description}
              // width={300}
              // height={100}
            />
          </div>
          <div className='grow-1'>
            <h2 className='text-4xl'>{project.name}</h2>
            <p className='text-xl'>{project.description}</p>
          </div>
        </a>
        ))}

    </div>
  )
}

export default ProjectsContent