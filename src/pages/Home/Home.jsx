import "../Home/Home.css";
import React, { useEffect, useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import publications from '../../data/publicationList.jsx';
import Publication from "../../layouts/publication/publication.jsx";

const images = [
  {
    url: require("../../assets/images/Home_B3.jpg"),
    textColor: "#ffffff", // use black for light backgrounds
    backgroundPositionY: "3%",
  },
  {
    url: require("../../assets/images/Home_B1.jpg"),
    textColor: "#ffffff", // use black for light backgrounds
    backgroundPositionY: "40%",
  },
   {
    url: require("../../assets/images/Home_B4.jpg"),
    textColor: "#ffffff", // use black for light backgrounds
    backgroundPositionY: "100%",
  },
];

function Home() {
const [currentImage, setCurrentImage] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
  const interval = setInterval(() => {
    setIsTransitioning(true);
    setCurrentImage((prev) => prev + 1);
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (currentImage === images.length) {
    // After transition ends, instantly reset to 0 (without animation)
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      setCurrentImage(0);
    }, 800); // Match your CSS transition duration

    return () => clearTimeout(timeout);
  }
}, [currentImage]);

  return (
    <div>
      
      <div className="slideshow-wrapper">
  {/* Sliding background track */}
  <div
    className="slideshow-track"
    style={{
      transform: `translateX(-${currentImage * 100}%)`,
       transition: isTransitioning ? "transform 0.8s ease-in-out" : "none",
    }}
  >
    {images.concat(images[0]).map((img, index) => (
      <div
        key={index}
        className="slideshow-slide"
        style={{
          backgroundImage: `url(${img.url})`,
          backgroundSize: 'cover',
           backgroundPositionY: img.backgroundPositionY || "center",
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
        color: images[currentImage % images.length].textColor,
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
        <div className="header" style={{ marginTop: '20px', fontWeight: '500',fontSize:'40px',color:"white" }}>
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
          <div className="header"  style={{  fontWeight: '500' }}>
          <button className="glass-button-publication" onClick={() => window.location.href = "/publications"} >All Publications<span className="arrow">→</span></button>
        </div>
      </div>
      <div className="news-update">
        <div className="header" style={{ marginTop: '20px', fontWeight: '500', fontSize:'40px',color:"white" }}>
          News & Updates
        </div>
        <div  style={{display: "flex", flexDirection: "column", justifyContent:"left", fontSize:"24px", marginTop:"-30px", marginLeft:"0px", color:"white"}}>
          <p style={{marginLeft:"30px"}}><strong>August 2025</strong>: xx, xx, and xx join as the founding members of the Das Lab</p>
          <p style={{marginLeft:"30px"}}><strong>March 2025</strong>: Anuvab officially starts at Nanyang Technological University!</p>
        </div>
      </div>

    </div>

  );


}

export default Home;