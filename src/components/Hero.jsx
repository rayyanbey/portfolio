import React from "react";
import profilepic from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { motion } from "framer-motion";
import cv from "../assets/resume.pdf";

const Hero = () => {
  return (
    <div className=" w-full mt-24 md:mt-12 p-4 relative ">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "MERN Developer",
              1000,
              "Spring Boot Developer",
              1000,
              "ML enthusiast",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Muhammad Rayyan</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a software engineer with a passion for web and machine learning
            with experience of 2+ years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a
              href={cv}
              download="resume.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download Resume
            </motion.a>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                target="_blank"
                href="https://www.linkedin.com/in/rayyan-asghar-4520262a5/"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                target="_blank"
                href="https://www.instagram.com/rayyan_bey/"
              >
                <AiOutlineInstagram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                target="_blank"
                href="https://github.com/rayyanbey/"
              >
                <AiOutlineGithub />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[450px] md:mt-3 md:w-[600px]" // Increased size
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
