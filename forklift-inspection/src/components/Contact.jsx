import React from "react";
import { BrowserRouter as Router, Link, Routes, Route, NavLink } from "react-router-dom"

export function Contact() {
const [currentPage, setCurrentPage] = Router("contact");

return (
  <div>
    {currentPage === "contact" && (
    <div id="contact-div">
      <div id="contact-info">
        <Link
          className="contact-info"
          id="contact-email"
          href="mailto:certifiedForkliftPros@gmail.com"
        >
          certifiedForkliftPros@gmail.com
        </Link>
        <br />
        <Link
          className="contact-info"
          id="contact-number"
          href="tel:1234567890"
        >
          (123) 456-7890
        </Link>
      </div>
      <div id="social-media-butttons">
        <nav id="contact-nav">
          <Link href="https://www.instagram.com">
            <button id="instagram" className="contact-info instagram">
              Instagram
            </button>
          </Link>
          <Link href="https://twitter.com">
            <button id="twitter" className="contact-info twitter">
              Twitter
            </button>
          </Link>
          <Link href="https://www.linkedin.com">
            <button id="linked-in" className="contact-info linked-in">
              LinkedIn
            </button>
          </Link>
        </nav>
      </div>
    </div>
    )}
  </div>
  );
}