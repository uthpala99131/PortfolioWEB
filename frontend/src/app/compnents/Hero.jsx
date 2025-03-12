"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[url('/t1.png')] bg-cover bg-center flex text-white relative px-6 sm:px-16 py-0 mx-0 my-0">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-85 z-5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center justify-center w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="col-span-8 text-center sm:text-left z-20"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold px-4 sm:px-16 ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              Hello, I&apos;m <br />
              <TypeAnimation
                sequence={["Uthpala", 1000, "Web Developer", 1000, "UI/UX Designer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-lg mb-6 sm:px-16 lg:text-xl">
            UI/UX DESIGNER & FULL STACK DEVELOPER.
          </p>


          <div className="flex flex-col sm:flex-row justify-center sm:justify-start sm:px-16 gap-4">
  <Link
    href="/#contact"
    className="px-6 py-3 w-full sm:w-40 text-center rounded-full bg-gradient-to-br from-pink-500 to-purple-400 hover:bg-slate-200 text-white"
  >
    Hire Me
  </Link>
  <Link
    href="/a"
    className="w-full sm:w-40 text-center"
  >
    <span className="block rounded-full px-6 py-3 border-2 border-pink-500 text-white hover:bg-gradient-to-br from-pink-500 to-purple-500 hover:border-transparent transition-all duration-300">
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
          {/* Additional content can go here */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;