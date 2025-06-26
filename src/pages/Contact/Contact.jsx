import "../Contact/Contact.css";
import React, { useEffect, useState, useRef } from "react";

function Contact(){
    return (
    <div className="contact-container">
      <div className="contact-row">
        <div className="contact-label">Principal Investigator</div>
        <div className="contact-details">
          <div className="name">Todd Hyster</div>
          <a href="mailto:thyster@princeton.edu" className="email">thyster@princeton.edu</a>
          <div className="address">Frick Chemistry Laboratory, 285</div>
          <div className="phone">609–258–5042</div>
        </div>
      </div>

      <div className="contact-row">
        <div className="contact-label">Faculty Assistant</div>
        <div className="contact-details">
          <div className="name">Pattie Faranetta</div>
          <a href="mailto:pfaranetta@princeton.edu" className="email">pfaranetta@princeton.edu</a>
          <div className="address">Frick Chemistry Laboratory, A87</div>
          <div className="phone">609–258–5202</div>
        </div>
      </div>

      <div className="contact-row">
        <div className="contact-label">Mailing Address</div>
        <div className="contact-details">
          <div>Hyster Lab</div>
          <div>Princeton University</div>
          <div>Department of Chemistry</div>
          <div>Frick Chemistry Laboratory, 285</div>
          <div>Princeton, NJ 08544–1023</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;