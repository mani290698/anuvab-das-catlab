import "../Team/Team.css";
import React, { useEffect, useState, useRef } from "react";
import ProfileCard from '../../layouts/team/profilecard'
import MemberCard from "../../layouts/team/membercard";
import grad from '../../assets/images/Grad pic.jpg'
import undergrad from '../../assets/images/Undergrad pic.jpg'

function Team() {

  const educationData = [
    {
      degree: "Postdoc, California Institute of Technology, 2021-2024",
      advisor: "Prof. Frances H. Arnold",
    },
    {
      degree: "Ph.D., Texas A&M University, 2015-2020",
      advisor: "Advisor: Prof. David C. Powers",
    },
    {
      degree: "M.Sc., IIT Kharagpur, 2013-2015",
      advisor: "Advisor: Prof. Jayanta K. Ray",
    },
    {
      degree: "B.Sc., Presidency College, 2010-2013",
      advisor: "Advisor: Prof. Abhishek Dey",
    },
  ];


  const teamMembers = [
    {
      name: "Peiyu Yi",
      designation: "Graduate",
      email: "PEIYU003@e.ntu.edu.sg",
      image: grad,
      education: [
        { degree: "B.S./M.S. Dalian University of Technology", advisor: "Qingwei Meng" },
      ],
      country: "https://flagcdn.com/w40/cn.png"
    },
    {
      name: "Soumen Ghosh",
      designation: "Graduate",
      email: "SOUMEN002@e.ntu.edu.sg",
      image: grad,
      education: [
        { degree: "M.S. Indian Institute of Technology, Guwahati", advisor: "Dipankar Srimani" },
         { degree:"B.S. Vidyasagar University", advisor:""}
      ],
      country: "https://flagcdn.com/w40/in.png"
    },
    {
      name: "Shreyansh Daga",
      designation: "Undergraduate",
      email: "DAGA0002@e.ntu.edu.sg",
      image: undergrad,
      education: [
        { degree: "B.S. Nanyang Technological University (expected 2027)", advisor: "" }
      ],
      country: "https://flagcdn.com/w40/in.png"
    },

  ];
  return (
    <div>
      <div className="team-grid">
        <div className="grid-text">
          <div className="publication-header" style={{ fontSize: "50px" }}>
            Team
          </div>

        </div>
        <div />
      </div>
      <div className="team-profile-section">
        {/* <div className="top-profile">
       <ProfileCard
      image={profileImg}
      name="Anuvab Das"
      title="Professor of Chemistry"
      designation="he/him"
      email="anuvab.das@ntu.edu.sg"
      phone="609-258-5042"
      address="Frick Chemistry Laboratory, 285"
      education={educationData}
    />
      </div> */}
        <div className="header" style={{ marginBottom: "2rem" }}>
          <u>Members</u>
        </div>
        {/* Team Members Grid */}
        <div className="team-members-grid">
          {teamMembers.map((member, idx) => (
            <MemberCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team;