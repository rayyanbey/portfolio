import React from "react"
import Reveal from "./Reveal"

const skills = [
  {
    category: 'Technical Skills',
    technologies: [
      { name: 'Scikit-learn' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'MERN' },
      { name: 'JAVA' },
      { name: 'SpringBoot' },
      { name: 'SQL' },
      { name: 'Github' }
    ],
  },
  {
    category: 'Non-Technical Skills',
    technologies: [
      { name: 'Time management' },
      { name: 'Communication' },
      { name: 'Problem solving' },
      { name: 'Creativity' },
      { name: 'Open-minded' },
      { name: 'Innovative' },
      { name: 'Adaptability' },
      { name: 'Leader' },
    ],
  },
]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I possess a diverse set of technical and non-technical skills. Here are some of them:
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex  items-center space-x-2">
                    <span className="text-white">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

export default Skills
