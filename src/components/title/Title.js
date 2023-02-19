import React from "react";
import "./title.css";

const Title = ({ description = "description", icon }) => {
  return (
    <div>
      <div className="title-container">
        <h3 className="description">{description}</h3>
        <img className="ml-4" src={icon} alt="money icon" />
      </div>
    </div>
  );
};

export default Title;
