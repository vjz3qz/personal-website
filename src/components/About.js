import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about">
      <div className="px-5 mx-auto text-center">
        <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          About
        </h1>
      </div>

      <div className="container mx-auto lg:max-w-screen-md px-10 pt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <div className="flex flex-col items-start sm:mb-16 mb-0 text-center sm:text-left col-span-1 sm:col-span-2">
          <div>
            <div>
              <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
                About Me
              </h1>
              <p className="font-light mb-8 leading-relaxed text-slate-200">
              I'm currently studying Computer Science student at the University of Virginia. 
              After graduation, I aspire to work a Software Engineer in a large metropolitan city. 
              Alongside my passion for technology, I love maintaining an active lifestyle that includes 
              weight lifting, running, hiking, playing chess, and basketball. 
              Beyond my academic pursuits, I also devote my time as a volunteer EMT.
              </p>
            </div>
            <div>
              <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
                Contacts
              </h1>

              <p className="font-light mb-8 leading-relaxed text-slate-200">
                Varun Pasupuleti<br />
                Ashburn, VA<br />
                (571) 439-5750<br />
                vjz3qz@virginia.edu
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block w-full mx-auto col-span-1 pl-5">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={`${process.env.PUBLIC_URL}/images/hero.jpg`}
          />
        </div>
      </div>
    </section>
  );
}



