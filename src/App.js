import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Experiences />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;

{/* <Navbar />
<About />
<Experience />
<Projects />
<Skills />
<Testimonials />
<Contact /> */}