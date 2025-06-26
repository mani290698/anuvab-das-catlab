import React from "react";
import "./membercard.css";

const MemberCard = ({ image, name, pronouns, email, education }) => {
  return (
    <div className="member-card">
      <img src={image} alt={name} className="member-img" />
      <h3 className="member-name">{name}</h3>
      <p className="member-pronouns">🧬 {pronouns}</p>
      <a href={`mailto:${email}`} className="member-email">
        {email}
      </a>
      <div className="member-education">
        {education.map((edu, index) => (
          <div key={index} className="edu-item">
            <strong>{edu.degree}</strong><br />
            <em>Advisor: {edu.advisor}</em>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberCard;
