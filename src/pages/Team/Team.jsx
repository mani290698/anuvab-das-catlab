import "../Team/Team.css";
import React, { useEffect, useState, useRef } from "react";
import ProfileCard from '../../layouts/team/profilecard'
import MemberCard from "../../layouts/team/membercard";
import profileImg from '../../assets/images/lablogo.jpg'

function Team(){

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
    name: "Yi Liu",
    designation: "Undergrad",
    email: "yl4431@princeton.edu",
    image: profileImg,
    education: [
      { degree: "M.S. Memorial University", advisor: "Christopher M. Kozak" },
      { degree: "Ph.D. McGill University", advisor: "Bruce A. Arndtsen" },
    ],
     country:"https://flagcdn.com/w40/cn.png"
  },
  {
    name: "Yi Liu",
    designation: "she/her",
    email: "yl4431@princeton.edu",
    image: profileImg,
    education: [
      { degree: "M.S. Memorial University", advisor: "Christopher M. Kozak" },
      { degree: "Ph.D. McGill University", advisor: "Bruce A. Arndtsen" },
    ],
     country:"https://flagcdn.com/w40/fr.png"
  },
  {
    name: "Yi Liu",
    designation: "she/her",
    email: "yl4431@princeton.edu",
    image: profileImg,
    education: [
      { degree: "M.S. Memorial University", advisor: "Christopher M. Kozak" },
      { degree: "Ph.D. McGill University", advisor: "Bruce A. Arndtsen" },
    ],
    country:"https://flagcdn.com/w40/ru.png"
  },
  {
    name: "Prasun Mukherjee",
    designation: "Undergrad",
    email: "pm2972@princeton.edu",
    image: profileImg,
    education: [
      { degree: "Ph.D. University of Calcutta", advisor: "Asish R. Das" },
      {
        degree: "Postdoctoral Fellow IIT Bombay",
        advisor: "Debabrata Maiti",
      },
    ],
     country:"https://flagcdn.com/w40/in.png"
  },
  {
    name: "Alexandra Brown",
    designation: "she/her",
    email: "ab5453@princeton.edu",
    image: profileImg,
    education: [
      {
        degree: "Ph.D. Massachusetts Institute of Technology",
        advisor: "Daniel Suess",
      },
    ],
     country:"https://flagcdn.com/w40/us.png"
  },
];
    return(
        <div>
        <div className="publication-grid">
        <div className="grid-text">
          <div className="publication-header" style={{ fontSize:"50px"}}>
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
<div className="header" style={{marginBottom:"2rem"}}>
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