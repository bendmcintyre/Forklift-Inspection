import { Link } from "react-router-dom"

export default function Contact() {
  return (
    <div>
      <div id="contact-div">
        <div id="contact-info">
          <a
            className="contact-info"
            id="contact-email"
            href="mailto:certifiedForkliftPros@gmail.com"
          >
            certifiedForkliftPros@gmail.com
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
          <nav id="contact-nav">
            <a href="https://www.instagram.com">
              <button id="instagram" className="contact-info instagram">
                Instagram
              </button>
            </a>
            <a href="https://twitter.com">
              <button id="twitter" className="contact-info twitter">
                Twitter
              </button>
            </a>
            <a href="https://www.linkedin.com">
              <button id="linked-in" className="contact-info linked-in">
                LinkedIn
              </button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}