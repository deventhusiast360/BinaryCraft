import React from "react";
import { SiGithub } from "react-icons/si";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral text-white p-4 w-full mt-[18vh] grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-0 gap-7">
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center gap-10 mb-2">
          <Link href={"https://github.com/deventhusiast360"}  target="_blank">
            <SiGithub size={25} />
          </Link>
          <Link
            href={
              "https://twitter.com/deventhusiast36"
            }
            target="_blank"
          >
            <AiFillTwitterCircle size={25} />
          </Link>
          
          <Link
            href={
              "https://www.linkedin.com/in/pritam-mondal-099466259"
            }
            target="_blank"
          >
            <AiFillLinkedin size={25} />
          </Link>
          
        </div>
        <div className="w-full flex gap-4 justify-center items-center text-neutral-content">
          <div className="">Email:</div>
          <div className="">deventhusiast360@gmail.com</div>
        </div>
      </div>
      <div className="flex justify-end items-center flex-col w-full">
        <div className="text-2xl text-neutral-content uppercase tracking-widest">
          <span className="text-accent">Binary</span>Craft
        </div>
        <div className="text-neutral-content">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;