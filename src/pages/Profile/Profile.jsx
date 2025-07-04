import React from "react";
import "./Profile.css";
import proteinImg from '../../assets/images/protein.jpg';
import headshot from '../../assets/images/Headshot.jpg';
// import Cv from '../../data/CV.pdf';

const FullProfile = () => {
    const profile = {
        name: "Anuvab Das",
        title: "Assistant Professor of Chemistry",
        email: "anuvab.das@ntu.edu.sg",
        phone: "609-258-5042",
        location: "School of Chemistry, Chemical Engineering & Biotechnology, Nanyang Technological University",
        cvLink: "",
        education: [
            {
                label: "Postdoc.",
                institution: "California Institute of Technology",
                // description: "NIH-NRSA Postdoctoral Fellow",
                advisor: "Prof. Frances H. Arnold",
                year: "2021–2024",
            },
            {
                label: "Ph.D.",
                institution: "Texas A&M University",
                advisor: "Prof. David C. Powers",
                year: "2015–2020",
            },
            {
                label: "M.Sc.",
                institution: "IIT Kharagpur",
                // description: "Marie Curie Fellow",
                advisor: "Prof. Jayanta K. Ray",
                year: "2013–2015",
            },
            {
                label: "B.Sc.",
                institution: "Presidency College",
                advisor: "Prof. Abhishek Dey",
                year: "2010–2013",
            },
        ],
        experience: [
            { role: "Assistant Professor", institution: "Nanyang Technological University", year: "2025–present" },
        ],
        awards: [
            { name: "Reaxys PhD Prize Finalist", year: "2020" },
            { name: "70 th Lindau Nobel Laureate Meeting", year: "2020" },
            { name: "Dr. Judith Edmiston Mentoring Award", year: "2020" },
            { name: "Martin Donald Corera Memorial Endowed Fund", year: "2019" },
        ]
    };

    return (
        <div>
           
                <div className="hero-overlay">
                    <div className="hero-content">
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div>
                                <img src={headshot} alt="Princeton" className="logo" />
                            </div>
                            <br></br>
                            <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "10px", justifyContent: "center" }}>
                               <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <i className="fab fa-twitter" style={{ fontSize: "24px", color: "#ffffff" }}></i>
                                    <span style={{color:"white"}}>@anuvab_chem</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <i className="fab fa-instagram" style={{ fontSize: "24px", color: "#ffffff" }}></i>
                                    <span style={{color:"white"}}>@anuvab_chem</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <i className="fas fa-envelope" style={{ fontSize: "24px", color: "#ffffff" }}></i>
                                    <span style={{color:"white"}}>@anuvab_chem</span>
                                </div>
                                 <a className="cv-link" href="/CV.pdf" download>📄 Download CV</a>
                            </div>
                        </div>
                        <div className="bio-text">
                            <h1>Anuvab Das</h1>
                            <div className="green-line" />
                            <p style={{textAlign:"justify"}}>
                                Born and raised in Kolkata, Anuvab obtained his B.Sc. degree from Presidency College in
                                2013. During his undergraduate studies, he gained his first research experience in Prof.
                                Abhishek Dey’s lab at the Indian Association for the Cultivation of Science, where he studied
                                the spectroelectrochemical properties of novel porphyrinic compounds. He then pursued
                                M.Sc. at the Indian Institute of Technology-Kharagpur, conducting his master’s thesis
                                research in Prof. Jayanta K. Ray’s lab, where he developed a new generation of palladium
                                catalysts for annulation reactions.
                            </p>
                            <p style={{textAlign:"justify"}}>
                                In 2015, Anuvab moved to Texas A&M University to pursue his Ph.D. under the guidance of
                                Prof. David C. Powers. His graduate research focused on structurally characterizing transient
                                intermediates involved in nitrene transfer reactions using in situ crystallography. After
                                completing his Ph.D. in 2020, he joined Prof. Frances H. Arnold’s group at the California
                                Institute of Technology as a postdoctoral researcher. There, he developed new-to-nature
                                amination reactions by engineering heme proteins using directed evolution and
                                spectroscopically characterizing the intermediates involved.
                            </p>
                            <p style={{textAlign:"justify"}}>
                                In 2025, Anuvab joined the School of Chemistry, Chemical Engineering, and Biotechnology
                                at Nanyang Technological University as an Assistant Professor.
                            </p>
                        </div>
                        {/* <div style={{opacity:"0.7"}}><img src={headshot} alt="Princeton" className="logo" /></div> */}
                    </div>
                </div>
         
            <div className="profile-full-card">
                {/* <h3>{profile.title}</h3> */}


                <div className="section">
                    <h2>Education</h2>
                    {profile.education.map((edu, idx) => (
                        <div key={idx} className="entry">
                            <div className="left">{edu.label}</div>
                            <div className="middle">
                                <strong>{edu.institution}</strong>
                                {edu.description && <div>{edu.description}</div>}
                                {edu.advisor && <em> <br></br>Advisor: {edu.advisor}</em>}
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
