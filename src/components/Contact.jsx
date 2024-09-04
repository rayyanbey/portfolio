import React from "react";
import { AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
              A Software Engineer specializing in crafting tailored digital solutions. Whether you're looking to enhance your online presence with a stunning website, streamline internal processes with custom software, or elevate your company's management systems, I'm here to transform your vision into reality. Let's collaborate to bring efficiency and innovation to your business.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">5<span>+</span></h3>
                <p className="text-xs md:text-base"><span>Projects</span></p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">2<span>+</span></h3>
                <p className="text-xs md:text-base"><span>years of experience</span></p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-10 md:mt-0">
            <div className="bg-gray-800/40 p-6 rounded-lg w-full">
              <h3 className="text-4xl font-semibold mb-5 text-center text-gray-300">Education</h3>
              <div className="text-gray-300 mb-5">
                <h4 className="text-2xl font-bold">FAST NUCES, Lahore</h4>
                <p className="text-lg">Bachelor’s in Software Engineering</p>
                <p className="text-sm">2022 - Present</p>
              </div>
              <div className="text-gray-300">
                <h4 className="text-2xl font-bold">Punjab Group Of Colleges</h4>
                <p className="text-lg">Inter in Computer Science</p>
                <p className="text-sm">2020 - 2022</p>
              </div>
            </div>
          </div> 
        </div>
      </Reveal>
      <div className="flex justify-center items-center mt-10">
        <a href="mailto:shahryarharoon123@gmail.com" className="flex items-center gap-2 text-gray-300 text-xl">
          <AiFillMail size={30} />
          <span>Contact Me: rayyanasghar9@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
