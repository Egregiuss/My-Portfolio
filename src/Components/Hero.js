import React from "react";
import { BsArrowBarDown } from "react-icons/bs";
import {
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import cartoon from "../images/Cartoonify.svg";
const Hero = () => {
  return (
    <section className=" container mt-5 " id="home">
      <div
        className=" hero row   justify-content-between "
        data-aos="fade-down"
      >
        <div className="col-lg-4 col-md-6 col-sm-12 w-25  ">
          <h1 className="name display-1">Ayobami Olaniyi</h1>
          <hr className="underline w-50" />
          <div className="social-media-links   d-inline-flex mb-5">
            <a
              className="px-1"
              href="https://linkedin.com/in/ayobamiolaniyi"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className="px-1"
              href="https://twitter.com/Egregiuss"
              target="_blank"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className="px-1"
              href="https://github.com/Egregiuss"
              target="_blank"
            >
              <AiOutlineGithub />
            </a>
          </div>
        </div>

        <div className="col-lg-2 d-none d-md-none d-xl-block d-sm-none  d-xs-none  ">
          <img src={cartoon} alt="toon" className="hero-image" />
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 story ">
          <h3 className="mb-3">Junior Full-Stack Developer</h3>

          <p className=" sub-story ">
            The href attribute requires a valid value to be accessible. Provide
            a valid, navigable address as the href value. If you cannot provide
            a valid href, but still need the element to resemble a link
          </p>

          <a
            href="https://drive.google.com/file/d/1tqTlcft2JmpSJ9khK7quOtEcTFNdiy-8/view?usp=sharing"
            target="_blank"
          >
            {" "}
            <button type="button" className="btn">
              Download Resume <BsArrowBarDown />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
