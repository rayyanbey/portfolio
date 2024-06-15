import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                A results-driven UI/UX and Graphic Designer passionate
                about crafting intuitive interfaces and captivating visuals.
                With a keen eye for detail and a commitment to seamless
                user experiences, I transform concepts into impactful
                designs that leave a lasting impression.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">6<span>+</span></h3>
                <p className="text-xs md:text-base"><span>Projects</span></p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">4<span>+</span></h3>
                <p className="text-xs md:text-base"><span>years of experience</span></p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-10 md:mt-0">
            <div className="bg-gray-800/40 p-6 rounded-lg w-full">
              <h3 className="text-4xl font-semibold mb-5 text-center text-gray-300">Education</h3>
              <div className="text-gray-300 mb-5">
                <h4 className="text-2xl font-bold">University of Punjab, Lahore</h4>
                <p className="text-lg">Bachelor’s in LAW</p>
                <p className="text-sm">2020 - Present</p>
              </div>
              <div className="text-gray-300">
                <h4 className="text-2xl font-bold">Punjab Group Of Colleges</h4>
                <p className="text-lg">Bachelor’s in Computer Science</p>
                <p className="text-sm">2018 - 2020</p>
              </div>
            </div>
          </div> 
        </div>
      </Reveal>
    </div>
  )
}

export default Contact
