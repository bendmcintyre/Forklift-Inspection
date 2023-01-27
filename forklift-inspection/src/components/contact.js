import React, { Component } from "react";

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <div id="navbar-container">
          <nav>
            <a href="inspect.html">
              <button id="inspect-page">Inspect</button>
            </a>
            <a href="safety.html">
              <button id="safety-page">Safety</button>
            </a>
            <a class="active" href="contact.html">
              <button id="contact-page">Contact</button>
            </a>
          </nav>
        </div>
        <div id="contact-info">
          <a id="contact-email" href="mailto:certifiedForkliftPros@gmail.com">
            FORK@LIFT.COM
          </a>
          <br />
          <a id="contact-number" href="tel.1234567890">
            (123) 456-7890
          </a>
        </div>
        <div id="social-media-butttons">
          <nav id="contact-nav">
            <a href="https://www.instagram.com">
              <button class="instagram">Instagram</button>
            </a>
            <a href="https://twitter.com">
              <button class="twitter">Twitter</button>
            </a>
            <a href="https://www.linkedin.com">
              <button class="linked-in">LinkedIn</button>
            </a>
          </nav>
        </div>
      </div>
    );
  }
}
