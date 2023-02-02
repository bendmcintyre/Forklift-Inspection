import React from "react";
import { Link } from "react-router-dom";
import forkliftLogo from "../images/forklift-logo.png";

const Inspect = () => {
  return (
    <div id="inspect-div">
      <div>
        <Link to="/inspect">
          <button id="start-button">START</button>
        </Link>
      </div>
      <div>
        <img id="forklift-logo" src={forkliftLogo} alt="Forklift logo" />
      </div>
    </div>
  );
};

export default Inspect;


