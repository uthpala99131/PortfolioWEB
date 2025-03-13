"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[url('/t1.png')] bg-cover bg-center flex items-center justify-center text-white relative px-6 sm:px-16 py-0">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-85"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight sm:leading-snug">
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
          <p className="text-[#ADB7BE] text-lg sm:text-xl mt-4">
            UI/UX DESIGNER & FULL STACK DEVELOPER.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 w-48 text-center rounded-full bg-gradient-to-br from-pink-500 to-purple-400 hover:bg-slate-200 text-white duration-500"
            >
              Hire Me
            </Link>
            <Link
              href="/a"
              className="w-48 text-center duration-500 cursor-pointer"
            >
              <span className="block rounded-full px-6 py-3 border-2 border-pink-500 text-white hover:bg-gradient-to-br from-pink-500 to-purple-500 hover:border-transparent transition-all duration-600">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
