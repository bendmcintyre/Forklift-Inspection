import React, { useState } from "react";

export function Inspect() {
  const [currentPage, setCurrentPage] = useState("inspect");

  return (
    <div>
      {currentPage === "inspect" && (
        <div id="inspect-div">
          <button id="start-button">START</button>
        </div>
      )}
    </div>
  );
}
