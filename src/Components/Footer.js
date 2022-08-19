import React from "react";
import Brand from "../images/BRAND.png";
import {
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="container-fluid footer mt-5">
      <div className="  m-5">
        <div className="col-md-12 col-lg-12 col-sm-12  ">
          <img src={Brand} alt="Brand" className="mx-5" />
          <p className="mx-3">Thanks For Scrolling, That's all folks.</p>

          <p className="mx-5 px-5 text-center">
            <AiOutlineGithub /> <AiOutlineLinkedin /> <AiOutlineTwitter />
          </p>
          <p className="numb mx-5 px-5 text-center"> 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
