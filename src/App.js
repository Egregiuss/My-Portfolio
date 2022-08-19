import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar } from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const [black, setBlack] = useState(true);

  AOS.init();

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
}

export default App;
