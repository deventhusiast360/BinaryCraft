import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const About = ({ scrollClass }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`h-screen flex flex-col justify-center items-center py-10 px-4 md:py-20 md:px-8 ${scrollClass} transform transition-opacity duration-500 ease-in-out  ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-40 md:w-60 h-40 md:h-60">
        <Image
          src="/logo.png"
          alt="Profile picture"
          width={400}
          height={400}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-content">
          Hi, I'm Pritam <span className="text-accent">Mondal</span>
        </h2>
        <div className="flex justify-center items-center gap-2 text-xl md:text-2xl">
          <div>I am a</div>
          <span className="text-accent">
            <Typewriter
              options={{
                strings: ["Backend, Web Developer", "Mobile App Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <p className={`text-base md:text-lg text-neutral-content mt-4`}>
          a passionate developer on a mission to turn ideas into reality through
          the power of code. From crafting sleek applications to solving complex
          problems, I embrace every challenge with boundless enthusiasm.
          Collaboration and clean code are my guiding principles, and I'm always
          eager to learn and grow. Let's connect and build something
          extraordinary together, making a meaningful impact in the digital
          landscape. Together, let's shape the future, one project at a time.
        </p>

        <div className="flex items-center justify-center mt-8 space-x-4 ">
          <h3 className="text-base md:text-xl font-semibold text-accent-focus text-center">
            Feel free to connect with Me :
          </h3>

          <a
            href="https://www.linkedin.com/in/pritam-mondal-099466259"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          {/* <a
        href="https://mail.google.com/mail/u/neb10nyson@gmail.com/#compose"
        target="_blank"
        rel="noopener noreferrer"

        className="text-gray-600 hover:text-gray-800 transition-colors"
      >
        <FaMailBulk size={24} />
      </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
