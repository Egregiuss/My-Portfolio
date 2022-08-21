import React from "react";
import { Data } from "../Data";
import Card from "./card";

const Services = () => {
  return (
    <section className="services p-3" id="services">
      <div className=" container-fluid row ">
        <div
          className="service-title col-sm-12 col-md-3 col-lg-3 "
          data-aos="fade-down"
        >
          <h1 className="display-3 mt-5 text-center  ">
            Top <br /> Services
          </h1>
        </div>
        {Data.map((service, key) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-3 service-card  ">
              <Card {...service}></Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
