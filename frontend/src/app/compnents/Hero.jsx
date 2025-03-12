"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[url('/sydn ey.png')] bg-cover bg-center flex items-center justify-center text-white relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-purple-800 opacity-50 z-5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="col-span-8 text-center sm:text-left z-20"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold w-full">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              Hello, I&apos;m{" "}
              <br />
              <TypeAnimation
                sequence={["Uthpala", 1000, "Web Developer", 1000, "UI/UX Designer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-500 to-purple-400 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/a"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 to-purple-500 hover:bg-slate-800 text-white mt-3 sm:mt-0"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 lg:mt-0"
        >
          {/* Add any additional content here */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

