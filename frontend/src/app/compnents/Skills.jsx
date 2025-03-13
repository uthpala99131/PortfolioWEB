import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML", percentage: 90},
    { icon: <FaCss3Alt size={140} />, label: "CSS", percentage: 90 },
    { icon: <IoLogoJavascript size={140} />, label: "JavaScript", percentage: 70 },
    { icon: <FaWordpress size={140} />, label: "WordPress", percentage: 90 },
    { icon: <FaReact size={140} />, label: "React", percentage: 80 },
    { icon: <FaNodeJs size={140} />, label: "Node.js", percentage: 70 },
    { icon: <SiNextdotjs size={140} />, label: "Next.js", percentage: 75 },
    { icon: <RiTailwindCssFill size={140} />, label: "Tailwind CSS", percentage: 80 },
];

const Skills = () => {
    return (
        <div className=' py-6'>
            <div className='text-white w-full max-w-[950px] mx-auto p-6 text-center'>
                <h2 className='text-5xl font-bold py-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-900 mt-4 mb-8 md:mb-12'>My Skills</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcons.map((skill, index) => (
                        <div 
                            key={index} 
                            className='h-[160px] w-[160px] md:h-[160px] md:w-[160px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl
                            transition-all transform hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:scale-110 duration-500 cursor-pointer'>
                            {skill.icon}
                            <p className='mt-2'>{skill.label} <br /> {skill.percentage}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

