import React from "react";
import "../styles/incidentManagement.css";
const IncidentManagement = () => {
  return (
    <div className="incident-management">
      <div className="incident-management-text">
        <p>
          Incident<br></br> Management
        </p>
      </div>
      <p className="incident-management-cleared">Cleared</p>
      <div className="incident-management-green-box">
        <div className="incident-management-green"></div>
        <div className="incident-management-green-box-number">
          <p>36</p>
        </div>
      </div>
      <p className="incident-management-cleared">Not cleared</p>
      <div className="incident-management-red-box">
        <div className="incident-management-red"></div>
        <div className="incident-management-red-box-number">
          <p>16</p>
        </div>
      </div>
    </div>
  );
};

export default IncidentManagement;
