import "./JoinUs.css";
import React, { useEffect, useState, useRef } from "react";

function JoinUs() {
    return (
        <div>
            <div className="joinus-grid">
                <div className="grid-text">
                    <div className="publication-header" style={{ fontSize: "50px" }}>
                        Join Us
                    </div>
                </div>
                <div />
            </div>
            <div className="joinus-profile-section">
                <div className="top-profile"></div>

                <div className="joinus-tabs-row">
                    <div className="joinus-tab">
                        <u><h3 style={{justifySelf:"center"}}>Undergraduate Students</h3></u><br></br>
                        <p style={{ textAlign: "justify", fontSize: "22px" }}>
                            Current NTU undergrads can either email <a href="mailto:anuvab.das@ntu.edu.sg" target="_blank"
                                rel="noopener noreferrer">Anuvab</a> or drop by office CCEB-06-21. If you are interested in gaining hands-on experience in synthetic chemistry and molecular biology, come join us!
                        </p>
                    </div>

                    <div className="joinus-tab">
                        <u><h3 style={{justifySelf:"center"}}>Graduate Students</h3></u><br></br>
                        <p style={{ textAlign: "justify", fontSize: "22px" }}>
                            We are currently recruiting Ph.D. and Masters students. If you are interested about our group, reach out to <a href="mailto:anuvab.das@ntu.edu.sg" target="_blank"
                                rel="noopener noreferrer">Anuvab</a>. Please check the <a href="https://www.ntu.edu.sg/education/graduate-programme/doctor-of-philosophy-(phd)-in-chemistry#curriculum" target="_blank"
                                    rel="noopener noreferrer">admission requirements</a> for the Chemistry graduate program at NTU.
                        </p>
                    </div>

                    <div className="joinus-tab">
                        <u><h3 style={{justifySelf:"center"}}>Postdoctoral Scholars</h3></u><br></br>
                        <p style={{ textAlign: "justify", fontSize: "22px" }}>
                            Interested postdoc candidates should directly email <a href="mailto:anuvab.das@ntu.edu.sg" target="_blank"
                                rel="noopener noreferrer">Anuvab</a> with a cover letter, CV, and a brief research summary.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default JoinUs;