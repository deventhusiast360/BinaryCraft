import { colors } from "@/colors/Colors";
import React, { useEffect, useRef, useState } from "react";

const Skillsets = ({ sectionClass }) => {
  const domains = [
    {
      id: 1,
      title: "Web Development",
      description:
        "I have experience in creating responsive and interactive web pages using HTML, CSS, JavaScript, React, Next.js, Tailwind, and more.",
      level: 80, // This is a percentage value from 0 to 100
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "I have interest in developing native and cross-platform mobile applications using Flutter, React Native, and more.",
      level: 80,
    },
    {
      id: 3,
      title: "Backend Development",
      description:"Backend development experience with Node.js, Express.js, MongoDB, SQL, GraphQL and more",
      level: 90,
    },
  
  ];

  const [fadeIn, setFadeIn] = useState(false);
  const skillsetsRef = useRef(null);

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

    if (skillsetsRef.current) {
      observer.observe(skillsetsRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section
      ref={skillsetsRef}
      id="skillsets"
      className={`h-auto py-10 px-4 md:py-20 md:px-8 transform transition-opacity duration-500 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold text-accent text-center`}>
        My Skillsets
      </h2>
      <p className="text-base md:text-lg text-center text-neutral-content mt-4">
        Here are some of the programming domains and skills that I have worked
        on or learned. You can see my proficiency level for each domain with a
        progress bar.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {domains.map((domain) => (
          <div key={domain.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-accent">{domain.title}</h3>
            <p className="text-base md:text-lg text-neutral-content mt-2">{domain.description}</p>
            <div className="mt-4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs md:text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-accent">
                      Proficiency
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs md:text-sm font-semibold inline-block text-primary-content">
                      {domain.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 md:h-3 text-xs md:text-sm flex rounded bg-blue-200">
                  <div
                    style={{ width: `${domain.level}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-success"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skillsets;
