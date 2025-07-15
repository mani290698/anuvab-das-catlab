import React from "react";
import "./membercard.css";

const MemberCard = ({ image, name, designation, email, education,country }) => {
  return (
    <div className="member-card">
  {/* Profile Image with Flag Badge (Bottom-Right) */}
  <div className="position-relative d-inline-block mb-3 mx-auto" style={{ width: '180px', height: '180px' }}>
    <img
      src={image}
      alt={name}
      className="rounded-circle img-fluid  shadow"
      style={{ width: '100%', height: '100%', objectFit: 'contain'}}
    />
    <img
      src={country} // Replace with appropriate flag
      alt="Flag"
      className="position-absolute border border-white rounded-circle"
      style={{ width: '28px', height: '28px', bottom: '5px', right: '5px', objectFit: 'cover' }}
    />
  </div>

  {/* Member Info */}
  <h3 className="member-name">
    {name}
  </h3>
  <p className="member-pronouns">{designation}</p>
  <a href={`mailto:${email}`} className="member-email">
    {email}
  </a>
  <div className="member-education">
    {education.map((edu, index) => (
      <div key={index} className="edu-item">
        <strong>{edu.degree}</strong>
        <br />
        {edu.advisor!="" &&
        <em>Advisor: {edu.advisor}</em>
}
      </div>
    ))}
  </div>
</div>


  );
};

export default MemberCard;
