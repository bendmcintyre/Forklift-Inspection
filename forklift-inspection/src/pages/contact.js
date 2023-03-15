import React from 'react';

import forkliftLogo from 'assets/images/forklift-logo.png';

export default function Contact() {
  return (
    <div>
      <div id="contact-div">
        <img id="forklift-logo" src={forkliftLogo} alt="Forklift logo" />
      </div>
      <div id="contact-info">
        <a
          className="contact-info"
          id="contact-email"
          href="mailto:certifiedForkliftPros@gmail.com"
        >
          CertifiedForkliftPros@gmail.com
        </a>
        <br />
        <a
          className="contact-info"
          id="contact-number"
          href="tel:1234567890"
        >
          (123) 456-7890
        </a>
      </div>
      <div id="social-media-butttons">
        <nav>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer" /* based on react's suggestion */
            id="instagram"
            className="contact-info instagram"
          >
            Instagram
          </a>
          <br />
          <a
            href="https://twitter.com"
            target="_blank"
            id="twitter"
            rel="noopener noreferrer" /* based on react's suggestion */
            className="contact-info twitter"
          >
            Twitter
          </a>
          <br />
          <a
            href="https://www.linkedin.com"
            target="_blank"
            id="linked-in"
            rel="noopener noreferrer" /* based on react's suggestion */
            className="contact-info linked-in"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </div>
  );
}
