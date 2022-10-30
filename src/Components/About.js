import React, { useState } from "react";
import Niyi from "../images/niyi.jpg";
import { SiJavascript, SiReact, SiCss3 } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

const About = () => {
  const info = ` An independent, self-motivated graduate with a deep-seated passion for technology, seeking to add 
  value, grow my skillset and motivated to advance and expand my skillset through targeted mentorship 
  and challenging projects. 
`;

  const [readMore, setReadMore] = useState(false);
  return (
    <section className=" About" id="about">
      <section className="container">
        <div className="  d-flex justify-content-center  ">
          <div className=" m-2 ">
            <h2> About Me</h2>
            <hr className="underline w-75 mx-3" />
          </div>
        </div>
        <div className=" container row d-flex justify-content-around ">
          <div className="col-sm-12 col-md-5 col-lg-6 w-25 d-flex justify-content-center mx-5 mb-5 ">
            <img src={Niyi} alt="my-image" className="my-image " />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 w-70 mt-3">
            <p className="about-story">
              {readMore ? info : `${info.substring(0, 150)} ...`}
              <button
                className="about-btn"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Show Less" : "Show More"}{" "}
              </button>
            </p>
            <h3>Tech Stacks:</h3>{" "}
            <span className="tech-stack ">
              <SiCss3 /> <SiJavascript /> <SiReact /> <AiOutlineConsoleSql />
            </span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
