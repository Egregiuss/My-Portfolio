import React from "react";

const Card = (props) => {
  const { name, icon, content } = props;

  return (
    <div className="row  h-100 service-card p-2 ">
      <div className="card d-flex align-items-stretch ">
        <img src={icon} className="card-img-top service-image" alt="icon" />
        <div className="card-body">
          <h2 className="card-text text-center ">{name}</h2>
          <p className="card-text  ">{content}</p>
        </div>
      </div>
    </div> 
  );
};

export default Card;
