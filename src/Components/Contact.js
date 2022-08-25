import React from "react";
import { RiContactsBookFill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { VscLocation } from "react-icons/vsc";
import {
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section className="container mt-5 px-5  " id="contact">
      <div className=" row d-flex  mx-5  ">
        <div className="col-md-4 col-sm-12 col-lg-4 contact-left ">
          <h3>Got A Project?</h3>
          <h3>Let's Talk.</h3>
          <p className="contact-icon mt-5">
            <RiContactsBookFill />
          </p>
        </div>
        <div className="divider col-md-2  col-lg-2 d-none d-md-block d-xl-block d-sm-none  d-xs-none  "></div>

        <div className="col-md-6 col-sm-12 col-lg-6 mt-2 list-icon  ">
          <p>
            {" "}
            <span className="contact-icons">
              <BiPhoneCall />
            </span>
            +2347062312140{" "}
          </p>
          <p>
            <span className="contact-icons">
              <FiMail />
            </span>
            daegregius@gmail.com
          </p>
          <p>
            <span className="contact-icons">
              {" "}
              <VscLocation />
            </span>
            Lagos,Nigeria{" "}
          </p>
          <div className="social-media-links   d-flex mt-5  justify-content-center ">
            <a
              className="px-1 icon-color"
              href="https://linkedin.com/in/ayobamiolaniyi"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className="px-1 icon-color"
              href="https://twitter.com/Egregiuss"
              target="_blank"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className="px-1 icon-color"
              href="https://github.com/Egregiuss"
              target="_blank"
            >
              <AiOutlineGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
