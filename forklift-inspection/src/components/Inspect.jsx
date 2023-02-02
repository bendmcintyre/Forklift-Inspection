import React from "react";
import { Link } from "react-router-dom";
import forkliftLogo from "../images/forklift-logo.png";

export function Inspect() {
  return (
    <div id="inspect-div">
      <div>
        <Link to="#">
          <button id="start-button">START</button>
        </Link>
      </div>
      <div>
        <img id="forklift-logo" src={forkliftLogo} alt="Forklift logo" />
      </div>
    </div>
  );
}

