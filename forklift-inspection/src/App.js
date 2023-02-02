import "./App.css";
import { Safety } from "./components/Safety.jsx";
import { Inspect } from "./components/Inspect.jsx";
import { Contact } from "./components/Contact.jsx";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState("inspect");

  return (
    <Router>
      <div className="App">
        <Route path="/inspect" component={Inspect} />
        <Route path="/safety" component={Safety} />
        <Route path="/contact" component={Contact} />
      </div>
      <div id="navbar-container">
        <nav>
          <Link
            to="/inspect"
            className={currentPage === "inspect" ? "active" : ""}
          >
            <button id="inspect-page" onClick={() => setCurrentPage("inspect")}>
              Inspect
            </button>
          </Link>
          <Link
            to="/safety"
            className={currentPage === "safety" ? "active" : ""}
          >
            <button id="safety-page" onClick={() => setCurrentPage("safety")}>
              Safety
            </button>
          </Link>
          <Link
            to="/contact"
            className={currentPage === "contact" ? "active" : ""}
          >
            <button id="contact-page" onClick={() => setCurrentPage("contact")}>
              Contact
            </button>
          </Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
