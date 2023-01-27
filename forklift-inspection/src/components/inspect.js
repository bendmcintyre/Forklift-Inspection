import React, { Component } from "react";
import forkliftLogo from "../images/forklift-logo.png";

export class Inspect extends React.Component {
  render() {
    return (
      <div>
        <div id="navbar-container">
          <nav>
            <a class="active">
              <button id="inspect-page">Inspect</button>
            </a>
            <a>
              <button id="safety-page">Safety</button>
            </a>
            <a>
              <button id="contact-page">Contact</button>
            </a>
          </nav>
        </div>
        <div>
          <button id="inspect-button">INSPECT</button>
        </div>
        <div id="forklift-logo">
          <img src={forkliftLogo} alt="Forklift logo" />
        </div>
      </div>
    );
  }
}
