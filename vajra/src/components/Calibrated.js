import React from "react";
import "../styles/calibrated.css";
const Calibrated = () => {
  return (
    <div className="calibrated">
      <div className="calibrated-text">
        <p>Calibrated</p>
      </div>
      <p className="calibrated-text-bars">Calibrated</p>
      <div className="calibrated-text-bar1-calibrated-blue-box">
        <div className="calibrated-text-bar1-calibrated-blue"></div>
        <div className="calibrated-text-bar1-calibrated-blue-number">
          <p>36</p>
        </div>
      </div>
      <p className="calibrated-text-bars">Not Calibrated</p>
      <div className="calibrated-text-bar2-not-calibrated-orange-box">
        <div className="calibrated-text-bar2-not-calibrated-orange"></div>
        <div className="calibrated-text-bar2-not-calibrated-orange-red-box-number">
          <p>16</p>
        </div>
      </div>
      <p className="calibrated-text-bars">Not Required</p>
      <div className="calibrated-text-bar3-not-required-yellow-box">
        <div className="calibrated-text-bar3-not-required-yellow"></div>
        <div className="calibrated-text-bar3-not-required-yellow-box-number">
          <p>16</p>
        </div>
      </div>
    </div>
  );
};

export default Calibrated;
