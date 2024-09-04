import React from 'react';
import { AiFillGithub, AiOutlineBehance, AiOutlineGithub } from 'react-icons/ai'
import project1 from '../assets/project1.png';	
import project3 from '../assets/project3.png';	
import project4 from '../assets/project4.png';
import project2 from '../assets/project2.png';
import project5 from '../assets/project5.png';
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "Connectify: Your own chat app",
      links: {
        site: 'https://connectify-two-phi.vercel.app/',
        github: "https://github.com/rayyanbey/connectify",
      },
    },
    {
      img: project3,
      title: "Project #2",
      description: "Password Manager Application",
      links: {
        site: "https://password-manager-five-psi.vercel.app/",
        github: "https://github.com/rayyanbey/password-generator",
      },
    },
    {
      img: project2,
      title: "Project #3",
      description: "Cuisine Control",
      links: {
        site: "#",
        github: "https://github.com/rayyanbey/Cuisine-Control",
      },
    },
    {
    
      img: project4,
      title: "Project #4",
      description: "Weather Application",
      links: {
        site: "https://rayyan-weather-app-a539a.web.app/",
        github: "https://github.com/rayyanbey/Weather_Application.git",
      },
    },
    {
    
      img: project5,
      title: "Project #5",
      description: "Dollar Price Predictor",
      links: {
        site: "#",
        github: "https://github.com/rayyanbey/Dollar_Price_Prediction",
      },
    }
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
                            Visit Site
                        </a>
                        <a href={project.links.github} target='_blank'
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                            
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