import "../Home/Home.css";
import proteinImg from '../../assets/images/protein.jpg';
import lab from '../../assets/images/lablogo.jpg';
import React, { useEffect, useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import publications from '../../data/publicationList.jsx';
import Publication from "../../layouts/publication/publication.jsx";

const images = [
  {
    url: require("../../assets/images/BG1.jpg"),
    textColor: "#ffffff", // use white for dark backgrounds
  },
  {
    url: require("../../assets/images/BG3.jpg"),
    textColor: "#000000", // use black for light backgrounds
  },
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // start fade-out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(false); // fade-in new image
      }, 300); // must match CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={`grid slideshow-background ${fade ? "fade-out" : "fade-in"}`}
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
            <button className="glass-button" onClick={() => window.location.href = "/publications"}>Learn More <span className="arrow">→</span></button>
          </div>
        </div>
      </div>
      <div className="recent-publications">
        <div className="header" style={{ marginTop: '20px', fontWeight: '500' }}>
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
      </div>
      <div className="recent-publications">
        <div className="header" style={{ marginTop: '20px', fontWeight: '500' }}>
          News & Updates
        </div>
        <div  style={{display: "flex", flexDirection: "column", alignItems: "center", fontSize:"18px" }}>
          <p>August 2025: xx, xx, and xx join as the founding members of the Das Lab</p>
          <p>March 2025: Anuvab officially starts at Nanyang Technological University!</p>
        </div>
      </div>

    </div>

  );


}

export default Home;