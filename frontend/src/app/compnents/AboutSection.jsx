"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>HTML/CSS</li>
        <li>Wordpress</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Complete Diploma in Business Information System with Distinction</li>
        <li>BSc Undergraduate Information technology for business</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-1 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <Image src="/images/b3.png" alt="image not found" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-900">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
          Hi, I'm Uthpala Abeysinghe, an aspiring UI/UX Designer and Full-Stack Developer passionate about creating seamless digital experiences. 
          I am currently an undergraduate student pursuing a BSc in Information Technology for Business and have successfully completed my Diploma with a Distinction Pass.
           I also have a strong academic background, having passed my A/Ls in the Physical Science stream.

          With expertise in front-end and back-end development, I specialize in:

          <li>Web Technologies: HTML, CSS, JavaScript, PHP, Bootstrap</li>
           <li>Frameworks & Libraries: MERN Stack (MongoDB, Express.js, React.js, Node.js)</li> 
           <li>CMS & Platforms: WordPress</li>
          I am always eager to learn new technologies and take on innovative projects. Whether it's designing intuitive interfaces or developing dynamic websites, I strive to build solutions that are both visually appealing and functionally robust.

          Let's connect and create something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
