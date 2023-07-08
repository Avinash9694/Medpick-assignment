import React from "react";
import "../styles/department.css";

const Departments = () => {
  return (
    <div className="department">
      <div className="department-text">
        <p>Departments</p>
      </div>
      <div className="department-color-boxes">
        <div className="department-color-boxes-navy-blue"></div>
        <div className="department-color-boxes-sky-blue"></div>
        <div className="department-color-boxes-green"></div>
        <div className="department-color-boxes-yellow"></div>
        <div className="department-color-boxes-orange"></div>
      </div>
      <div className="department-color-box1">
        <p className="department-color-box1-text">Laboratory</p>
        <div className="department-color-box1-color-and-number">
          <div className="department-color-box1-color-outer">
            <div className="department-color-box1-color-inner"></div>
          </div>
          <div className="department-color-box1-number">
            <p>91</p>
          </div>
        </div>
      </div>
      <div className="department-color-box2">
        <p className="department-color-box2-text">Radiology</p>
        <div className="department-color-box2-color-and-number">
          <div className="department-color-box2-color-outer">
            <div className="department-color-box2-color-inner"></div>
          </div>
          <div className="department-color-box2-number">
            <p>53</p>
          </div>
        </div>
      </div>
      <div className="department-color-box3">
        <p className="department-color-box3-text">ICU</p>
        <div className="department-color-box3-color-and-number">
          <div className="department-color-box3-color-outer">
            <div className="department-color-box3-color-inner"></div>
          </div>
          <div className="department-color-box3-number">
            <p>98</p>
          </div>
        </div>
      </div>
      <div className="department-color-box4">
        <p className="department-color-box4-text">Operation Theatre</p>
        <div className="department-color-box4-color-and-number">
          <div className="department-color-box4-color-outer">
            <div className="department-color-box4-color-inner"></div>
          </div>
          <div className="department-color-box4-number">
            <p>75</p>
          </div>
        </div>
      </div>
      <div className="department-color-box5">
        <p className="department-color-box5-text">OPD</p>
        <div className="department-color-box5-color-and-number">
          <div className="department-color-box5-color-outer">
            <div className="department-color-box5-color-inner"></div>
          </div>
          <div className="department-color-box5-number">
            <p>36</p>
          </div>
        </div>
      </div>

      <div className="department-see-more">
        <p>see more</p>
      </div>
    </div>
  );
};

export default Departments;
