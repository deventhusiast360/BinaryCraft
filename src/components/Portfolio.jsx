import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Portfolio = ({ sectionClass }) => {
  // This is an array of objects that contains the data for each project
  // You can replace this with your own data or fetch it from an API
  const projects = [
    {
      id: 1,
      title: "Due Management App",
      description:
        "A due management app made for a shop built with Flutter, Dart",
      image: "/1.jpeg",
      url: "https://github.com/deventhusiast360/qrd_flutter_app.git",
    },
    {
      id: 2,
      title: "Due management API",
      description:
        "Built with NodeJs, PostgreSQL, ExpressJs",
      image: "/1.jpeg",
      url: "https://github.com/deventhusiast360/qrd_backend.git",
    },
    {
      id: 3,
      title: "Location Sender App",
      description:
        "A Location sender app that shows the current location and updates location in realtime",
      image: "/1.jpeg",
      url: "https://github.com/deventhusiast360/location_sender_app.git",
    },
    // {
    //   id: 4,
    //   title: "Blog App",
    //   description:
    //     "A blog app that allows users to create, edit, and delete posts",
    //   image: "/1.jpeg",
    //   url: "#",
    // },
  ];
  const [fadeIn, setFadeIn] = useState(false);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this threshold as per your preference
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFadeIn(true);
        } else {
          setFadeIn(false);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className={`py-20 px-8 ${sectionClass} transform transition-opacity duration-500 ease-in-out  ${
        fadeIn ? "opacity-100" : "opacity-0" // Apply opacity based on the fadeIn state
      }`}
    >
      <h2 className="text-3xl font-bold text-accent text-center">
        My Projects
      </h2>
      <p className="text-lg text-neutral-content text-center mt-4">
        Here are some of the projects that I have worked on or contributed to.
        You can click on the button to view more details about each project.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src="/gojo.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  <a href={`${project.url}`} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary bg-accent border-none outline-none hover:bg-accent-focus">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
