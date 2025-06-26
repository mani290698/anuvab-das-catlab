import React from "react";
import "./profilecard.css"; // optional CSS file

const ProfileCard = ({
    image,
    name,
    title,
    pronouns,
    email,
    phone,
    address,
    education,
}) => {
    return (
        <div className="profile-card">
            <div className="profile-left">
                <img src={image} alt={name} className="profile-image" />
            </div>
            <div className="profile-right">
                <h2 className="profile-name">{name}</h2>
                <h4 className="profile-title">{title}</h4>
                <div className="profile-pronouns">{pronouns}</div>
                <div className="profile-contact">
                    <a href={`mailto:${email}`} className="email">{email}</a>
                    <p>{address}</p>
                    <a href={`tel:${phone}`} className="phone">{phone}</a>
                </div>
                <div className="profile-education">
                    {education.map((item, idx) => (
                        <div key={idx} className="edu-item">
                            <strong>{item.degree}</strong><br />
                            <em>{item.advisor}</em>
                        </div>
                    ))}
                </div>
                <div className="profile-details-link">
                    <a href="/anuvab">📄 Profile Details</a>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
