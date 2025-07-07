import "../Home/Home.css";
import lab from '../../assets/images/lablogo.jpg';
import React, { useEffect, useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import publications from '../../data/publicationList.jsx';
import Publication from "../../layouts/publication/publication.jsx";

const images = [
  // {
  //   url: require("../../assets/images/Home_B1.jpg"),
  //   textColor: "#ffffff", // use white for dark backgrounds
  // },
  {
    url: require("../../assets/images/Home_B3.jpg"),
    textColor: "#ffffff", // use black for light backgrounds
    backgroundPositionY: "center",
  },
   {
    url: require("../../assets/images/Home_B4.jpg"),
    textColor: "#ffffff", // use black for light backgrounds
    backgroundPositionY: "100%",
  },
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 5000); // slide every 5s

  return () => clearInterval(interval);
}, []);

  return (
    <div>
      {/* <div className={`grid slideshow-background ${fade ? "fade-out" : "fade-in"}`}
        style={{
          backgroundImage: `url(${images[currentImage].url})`,
        }}>
        <div />
        <div className="grid-text" style={{
          color: images[currentImage].textColor,
          fontWeight: "500", // dynamic text color
          marginBottom: "50px"
        }}>
          <div className="header" style={{textAlign:"justify"}}>
            Welcome to the Das Lab
          </div>
          <div className="para" style={{textAlign:"justify", marginRight:"10px"}}>
            We are a multidisciplinary group focused on understanding reaction mechanisms and
            developing sustainable synthetic methods through protein engineering
          </div>
          <div className="learn-more-button">
            <button className="glass-button" onClick={() => window.location.href = "/research"}>Learn More <span className="arrow">→</span></button>
          </div>
        </div>
      </div> */}
      <div className="slideshow-wrapper">
  {/* Sliding background track */}
  <div
    className="slideshow-track"
    style={{
      transform: `translateX(-${currentImage * 100}%)`,
    }}
  >
    {images.map((img, index) => (
      <div
        key={index}
        className="slideshow-slide"
        style={{
          backgroundImage: `url(${img.url})`,
          backgroundSize: 'cover',
          backgroundPositionY: images[currentImage].backgroundPositionY || "center",
        }}
      />
    ))}
  </div>

  {/* Overlay text (fixed in place) */}
  <div className="slideshow-overlay">
    <div />
    <div
      className="grid-text"
      style={{
        color: images[currentImage].textColor,
        fontWeight: "500",
        marginBottom: "50px",
      }}
    >
      <div className="header" style={{ textAlign: "justify" }}>
        Welcome to the Das Lab
      </div>
      <div className="para" style={{ textAlign: "justify", marginRight: "10px" }}>
        We are a multidisciplinary group focused on understanding reaction mechanisms and
        developing sustainable synthetic methods through protein engineering
      </div>
      <div className="learn-more-button">
        <button className="glass-button" onClick={() => window.location.href = "/research"}>
          Learn More <span className="arrow">→</span>
        </button>
      </div>
    </div>
  </div>
</div>

      <div className="recent-publications">
        <div className="header" style={{ marginTop: '20px', fontWeight: '500',fontSize:'40px' }}>
          Recent Publications
        </div>
        <div className="publications">
          {publications.recentPublication.map(publicationData => (
            <div className="card">
              <Publication
                image={publicationData.image}
                title={publicationData.title}
                author={publicationData.author}
                journal={publicationData.journal}
                date={publicationData.date}
                articleLink={publicationData.article}
              />

            </div>))}
        </div>
          <div className="header" style={{  fontWeight: '500' }}>
          <button className="glass-button-publication" onClick={() => window.location.href = "/publications"} >All Publications<span className="arrow">→</span></button>
        </div>
      </div>
      <div className="news-update">
        <div className="header" style={{ marginTop: '20px', fontWeight: '500', fontSize:'40px' }}>
          News & Updates
        </div>
        <div  style={{display: "flex", flexDirection: "column", justifyContent:"left", fontSize:"24px", marginTop:"-30px", marginLeft:"20px"}}>
          <p><strong>August 2025</strong>: xx, xx, and xx join as the founding members of the Das Lab</p>
          <p><strong>March 2025</strong>: Anuvab officially starts at Nanyang Technological University!</p>
        </div>
      </div>

    </div>

  );


}

export default Home;