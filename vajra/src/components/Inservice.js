import React from "react";
import "../styles/inservice.css";
import inserviceIcon from "../images/inserviceIcon.png";
const Inservice = () => {
  return (
    <div className="in-service">
      <div className="in-service-text">
        <p>In Service</p>
      </div>
      <img
        src={inserviceIcon}
        alt="inservice icon"
        className="inservice-icon"
      />
      <div>
        <h3 className="in-service-name">
          <span>Total Services</span>
          <span>Open Services</span>
        </h3>
        <h1 className="in-service-number">
          <span>38</span>
          <span>18</span>
        </h1>
      </div>
    </div>
  );
};

export default Inservice;
