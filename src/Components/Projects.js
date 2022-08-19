import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Project } from "../Data";

const Projects = () => {
  const [people, setPeople] = useState(Project);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) setIndex(0);
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <section className=" row section d-flex  " id="projects">
      <div className="col-lg-3 col-md-6 col-sm-12 project-header">
        <h2 className="m-5">
          Projects
          <hr className="underline w-25 " />
        </h2>
        <a href="https://github.com/Egregiuss" target="_blank">
          <h4>
            Explore More Projects <AiOutlineArrowRight />{" "}
          </h4>
        </a>
      </div>
      <div className="section-center col-lg-3 col-md-6 col-sm-12">
        {Project.map((person, personIndex) => {
          const { id, image, title } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === Project.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={title} className="project-image mw-100" />
              <h4>{title}</h4>
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>

      <h3></h3>
    </section>
  );
};

export default Projects;
