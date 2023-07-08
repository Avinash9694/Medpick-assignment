import React from "react";
import "../styles/totalincident.css";
import TotalIncidentData from "./TotalIncidentData";
const Totalincident = () => {
  return (
    <div className="total-incident">
      <div className="total-incident-recorded">
        <p>Total Incidents Recorded</p>
      </div>
      <div className="total-incident-dropdown">
        <div className="total-incident-days">
          <p className="total-incident-dropdown-text">Days</p>
        </div>
        <div className="total-incident-week">
          <p className="total-incident-dropdown-text">Week</p>
        </div>
        <div className="total-incident-month">
          <p className="total-incident-dropdown-text">Month</p>
        </div>
        <div className="total-incident-custom">
          <p className="total-incident-dropdown-text">Custom</p>
        </div>
        <div className="total-incident-recorded-text">
          <p className="total-incident-dropdown-text">Recorded</p>
        </div>
        <div className="total-incident-cleared-text">
          <p className="total-incident-dropdown-text">Cleared</p>
        </div>
      </div>
      <TotalIncidentData />
      <div className="total-incident-axis-names">
        <div className="total-incident-axis-names-x-axis">
          <div className="total-incident-axis-names-x-axis-text1">
            <p>X-Axis </p>
          </div>
          <div className="total-incident-axis-names-x-axis-text2">
            <p> : Weeks</p>
          </div>
        </div>
        <div className="total-incident-axis-names-y-axis">
          <div className="total-incident-axis-names-y-axis-text1">
            <p>Y-Axis</p>
          </div>
          <div className="total-incident-axis-names-y-axis-text2">
            <p> : Incidents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totalincident;
