import React from "react";
import "../styles/totalasset.css";
import totalAssetFrame from "../images/totalAssetFrame.png";
const Totalassets = () => {
  return (
    <div className="total-asset">
      <div className="total-asset-text">
        <p>Total assets</p>
      </div>
      <img
        src={totalAssetFrame}
        alt="total asset logo"
        className="total-asset-logo"
      />
      <h1 className="total-asset-number">46</h1>
    </div>
  );
};

export default Totalassets;
