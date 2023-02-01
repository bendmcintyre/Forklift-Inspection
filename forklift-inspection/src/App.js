import "./App.css";
import { Safety } from "./components/safety.jsx";
import { Inspect } from "./components/inspect.jsx";
import { Contact } from "./components/contact.jsx";

import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("inspect");

  return (
    <div>
      <div className="App">
        {currentPage === "inspect" && <Inspect />}
        {currentPage === "safety" && <Safety />}
        {currentPage === "contact" && <Contact />}
      </div>
      <div id="navbar-container">
        <nav>
          <a className={currentPage === "inspect" ? "active" : ""}>
            <button id="inspect-page" onClick={() => setCurrentPage("inspect")}>
              Inspect
            </button>
          </a>
          <a className={currentPage === "safety" ? "active" : ""}>
            <button id="safety-page" onClick={() => setCurrentPage("safety")}>
              Safety
            </button>
          </a>
          <a className={currentPage === "contact" ? "active" : ""}>
            <button id="contact-page" onClick={() => setCurrentPage("contact")}>
              Contact
            </button>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default App;