import React from "react";
import "./Profile.css";
import proteinImg from '../../assets/images/protein.jpg';

const FullProfile = () => {
    const profile = {
        name: "Anuvab Das",
        title: "Professor of Chemistry",
        email: "thyster@princeton.edu",
        phone: "609-258-5042",
        location: "Frick Chemistry Laboratory, 285\nDepartment of Chemistry\nPrinceton, NJ 08544",
        pronouns: "he/him",
        cvLink: "#",
        education: [
            {
                label: "Postdoc.",
                institution: "California Institute of Technology",
                description: "NIH-NRSA Postdoctoral Fellow",
                advisor: "Frances H. Arnold",
                year: "2013 – 2015",
            },
            {
                label: "Ph.D.",
                institution: "Colorado State University",
                advisor: "Tomislav Rovis",
                year: "2008 – 2013",
            },
            {
                label: "",
                institution: "University of Basel",
                description: "Marie Curie Fellow",
                advisor: "Thomas R. Ward",
                year: "",
            },
            {
                label: "B.S.",
                institution: "University of Minnesota, Twin Cities",
                advisor: "Christopher Douglas",
                year: "2005 – 2008",
            },
        ],
        experience: [
            { role: "Professor of Chemistry", institution: "Princeton University", year: "2023 – Present" },
            { role: "Associate Professor of Chemistry and Chemical Biology", institution: "Cornell University", year: "2021 – 2023" },
            { role: "Assistant Professor of Chemistry", institution: "Princeton University", year: "2015 – 2020" },
        ],
        awards: [
            { name: "National Fresenius Award", year: "2023" },
            { name: "Mitsui Catalysis Science Award for Creative Work", year: "2022" },
            { name: "Buck-Whitney Award", year: "2022" },
        ]
    };

    return (
        <div>
            <div
                className="profile-hero"
                style={{ backgroundImage: `url(${proteinImg})` }}
            >
                <div className="hero-overlay">
                    <div className="hero-content">
                        <div className="bio-text">
                            <h1>Anuvab Das</h1>
                            <div className="green-line" />
                            <p>
                                Born and raised in Kolkata, Anuvab obtained his B.Sc. degree from Presidency College in
                                2013. During his undergraduate studies, he gained his first research experience in Prof.
                                Abhishek Dey’s lab at the Indian Association for the Cultivation of Science, where he studied
                                the spectroelectrochemical properties of novel porphyrinic compounds. He then pursued
                                M.Sc. at the Indian Institute of Technology-Kharagpur, conducting his master’s thesis
                                research in Prof. Jayanta K. Ray’s lab, where he developed a new generation of palladium
                                catalysts for annulation reactions.
                            </p>
                            <p>
                                In 2015, Anuvab moved to Texas A&M University to pursue his Ph.D. under the guidance of
                                Prof. David C. Powers. His graduate research focused on structurally characterizing transient
                                intermediates involved in nitrene transfer reactions using in situ crystallography. After
                                completing his Ph.D. in 2020, he joined Prof. Frances H. Arnold’s group at the California
                                Institute of Technology as a postdoctoral researcher. There, he developed new-to-nature
                                amination reactions by engineering heme proteins using directed evolution and
                                spectroscopically characterizing the intermediates involved.
                            </p>
                            <p>
                                In 2025, Anuvab joined the School of Chemistry, Chemical Engineering, and Biotechnology
                                at Nanyang Technological University as an Assistant Professor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-full-card">
                <h1>{profile.name}</h1>
                <h3>{profile.title}</h3>
                <a className="cv-link" href={profile.cvLink}>📄 Download CV</a>

                <div className="profile-contact">
                    <img src={proteinImg} alt="Princeton" className="logo" />
                    <div className="contact-text">
                        <p>{profile.location}</p>
                        <p>
                            <strong>{profile.phone}</strong> •{" "}
                            <a href={`mailto:${profile.email}`}>{profile.email}</a> • {profile.pronouns}
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h2>Education</h2>
                    {profile.education.map((edu, idx) => (
                        <div key={idx} className="entry">
                            <div className="left">{edu.label}</div>
                            <div className="middle">
                                <strong>{edu.institution}</strong>
                                {edu.description && <div>{edu.description}</div>}
                                {edu.advisor && <em>Advisor: {edu.advisor}</em>}
                            </div>
                            <div className="right">{edu.year}</div>
                        </div>
                    ))}
                </div>

                <div className="section">
                    <h2>Experience</h2>
                    {profile.experience.map((exp, idx) => (
                        <div key={idx} className="entry single-line">
                            <div className="middle">
                                <strong>{exp.role}</strong>
                                <div>{exp.institution}</div>
                            </div>
                            <div className="right">{exp.year}</div>
                        </div>
                    ))}
                </div>

                <div className="section">
                    <h2>Honors & Awards</h2>
                    {profile.awards.map((award, idx) => (
                        <div key={idx} className="entry single-line">
                            <div className="middle">{award.name}</div>
                            <div className="right">{award.year}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullProfile;
