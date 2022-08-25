import React from "react";
import { Navbar } from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
};
