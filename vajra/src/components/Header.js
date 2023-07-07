import React from "react";
import "../styles/header.css";
import Vector from "../images/Vector.png";
import plus from "../images/plus.png";
const Header = () => {
  return (
    <div className="header">
      <div className="searchbox">
        <input />
        <img src={Vector} alt="search logo" className="search-logo"></img>
      </div>
      <button className="add">
        <img src={plus} alt="plus logo" className="plus-logo"></img>
        <p className="button">Add New</p>
      </button>
      <button className="signin">Sign in</button>
      <button className="signup">Sign up</button>
    </div>
  );
};

export default Header;
