import React from "react";
import vajra from "../images/vajra.png";
import home from "../images/home.png";
import profile from "../images/profile.png";
import users from "../images/users.png";
import Departments from "../images/Departments.png";
import incidents from "../images/incidents.png";
import FrameManual from "../images/FrameManual.png";
import FrameReports from "../images/FrameReports.png";
import contactUs from "../images/contactUs.png";
import signOut from "../images/SignOut.png";
import ServiceRequest from "../images/ServiceRequests.png";
import warrantyStatus from "../images/warrantyStatus.png";
import "../styles/sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={vajra} alt="Vajra" className="vajra"></img>

      <div className="home-rectangle">
        <img src={home} alt="home logo" className="home-logo"></img>
      </div>
      <div>
        <img src={profile} alt="profile logo" className="profile-logo"></img>
      </div>
      <div>
        <img src={users} alt="user logo" className="user-logo"></img>
      </div>
      <div>
        <img
          src={Departments}
          alt="department logo"
          className="department-logo"
        ></img>
      </div>
      <div>
        <img
          src={incidents}
          alt="incidents logo"
          className="incidents-logo"
        ></img>
      </div>
      <div>
        <img
          src={ServiceRequest}
          alt="ServiceRequest logo"
          className="ServiceRequest-logo"
        ></img>
      </div>
      <div>
        <img
          src={FrameManual}
          alt="FrameManual logo"
          className="FrameManual-logo"
        ></img>
      </div>
      <div>
        <img
          src={FrameReports}
          alt="FrameReports logo"
          className="FrameReports-logo"
        ></img>
      </div>
      <div>
        <img
          src={warrantyStatus}
          alt="warrantyStatus logo"
          className="warrantyStatus-logo"
        ></img>
      </div>
      <div>
        <img
          src={contactUs}
          alt="contactUs logo"
          className="contactUs-logo"
        ></img>
      </div>
      <div>
        <img src={signOut} alt="signOut logo" className="signOut-logo"></img>
      </div>
    </div>
  );
};

export default Sidebar;
