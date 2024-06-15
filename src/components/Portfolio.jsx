import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineBehance } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "Gear Vault is an e-commerce platform for gaming equipment.",
      links: {
        site: 'https://www.figma.com/design/KLG3QDeSBs9IfhIkS4kjb5/Prototype?node-id=159-2',
        github: "https://www.behance.net/gallery/199563811/GearVault-(Gaming-Equipment-Store)",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "UI for Event Management APP",
      links: {
        site: "https://www.figma.com/design/IJgv2BdGMAdIYOPk7TfLhS/Untitled",
        github: "https://www.figma.com/design/IJgv2BdGMAdIYOPk7TfLhS/Untitled",
      },
    },
    {
      img: project4,
      title: "Project #3",
      description: "Little Lemon App.",
      links: {
        site: "https://www.figma.com/design/snQjD5FKoiaPx1CQJiKV2n/Little-Lemon?node-id=0-1",
        github: "#",
      },
    },
    {
      img: project5,
      title: "Project #4",
      description: "Wallpaper App",
      links: {
        site: "https://www.figma.com/design/HHnWomuIVw78CcLHyWInQb/Untitled",
        github: "#",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            Visit Figma
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineBehance/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio