"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  { id: 1, title: "My Portfolio Website", description: "My portfolio website.Using MERN Stack & Next.js", image: "/images/projects/p.jpg", tag: ["All", "Web"], gitUrl: "/", previewUrl: "/" },
  { id: 2, title: "Superfresh Supermarket Website wordpress", description: "SuperFresh Website. Using Wordpress", image: "/images/projects/s.jpg", tag: ["All", "Web"], gitUrl: "/", previewUrl: "/" },
  { id: 3, title: "AI Chat Bot", description: "Using HTML,CSS,Java script & AI Api", image: "/images/projects/c.jpg", tag: ["All", "Web"], gitUrl: "/", previewUrl: "/" },
  { id: 4, title: "Bassunnahe Website", description: "Only Frontend Development (Backend(Pending))-HTML,CSS,Boostrap", image: "/images/projects/b.jpg", tag: ["All", "Web"], gitUrl: "/", previewUrl: "/" },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // Number of projects per page

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setCurrentPage(1); // Reset pagination when changing tags
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20" id="projects">
      <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-900 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* Project Tags */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {["All", "Web", "Mobile"].map((category) => (
          <button
            key={category}
            onClick={() => handleTagChange(category)}
            className={`px-4 py-2 rounded-lg ${tag === category ? "bg-purple-700" : "bg-gray-600"} transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project List */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {displayedProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg font-semibold text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
          >
            
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
