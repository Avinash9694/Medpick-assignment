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
    </div>
  );
};

export default Totalincident;
