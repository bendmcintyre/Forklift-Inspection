import React, { Component } from "react";

export class Inspect extends React.Component {
  render() {
    return (
      <div>
        <div id="navbar-container">
          <nav>
            <a class="active" href="inspect.html">
              <button id="inspect-page">Inspect</button>
            </a>
            <a href="safety.html">
              <button id="safety-page">Safety</button>
            </a>
            <a href="contact.html">
              <button id="contact-page">Contact</button>
            </a>
          </nav>
        </div>
        <div>
          <button id="inspect-button">INSPECT</button>
        </div>
        <div id="forklift-logo">
          <img src="./images/forklift-logo.png" />
        </div>
      </div>
    );
  }
}
