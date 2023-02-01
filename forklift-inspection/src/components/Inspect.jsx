import React, { useState } from "react";
import forkliftLogo from "../images/forklift-logo.png";

export function Inspect() {
  const [currentPage, setCurrentPage] = useState("inspect");

  return (
    <div>
      {currentPage === "inspect" && (
        <div id="inspect-div">
          <div>
            <button id="start-button">START</button>
          </div>
          <div>
            <img id="forklift-logo" src={forkliftLogo} alt="Forklift logo" />
          </div>
        </div>
      )}
    </div>
  );
}