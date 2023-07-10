import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="about"
                smooth={true}
                duration={500}
                className="ml-3 text-xl"
                >
            Varun Pasupuleti
          </Link>
        </span>
        
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link
                to="experiences"
                smooth={true}
                duration={500}
                className="mr-5 hover:text-white"
                >
                Experiences
            </Link>
            <Link
                to="projects"
                smooth={true}
                duration={500}
                className="mr-5 hover:text-white"
                >
                Projects
            </Link>
            <Link
                to="skills"
                smooth={true}
                duration={500}
                className="mr-5 hover:text-white"
                >
                Skills
            </Link>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}


