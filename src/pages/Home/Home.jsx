import "../Home/Home.css";
import proteinImg from '../../assets/images/protein.jpg';
import lab from '../../assets/images/lablogo.jpg';
import React, { useEffect, useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import publicationPapers from '../../data/publicationList.jsx';
import Publication from "../../layouts/publication/publication.jsx";

const images = [
  require("../../assets/images/protein.jpg"),
  require("../../assets/images/lablogo.jpg"),
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
      }, 100); // must match CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={`grid slideshow-background ${fade ? "fade-out" : "fade-in"}`}
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}>
        <div />
        <div className="grid-text">
          <div className="header">
            Welcome to the Das Lab
          </div>
          <div className="para">
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
          {publicationPapers.map(publicationData => (
            <div className="card">
              <Publication
                image={publicationData.image}
                title={publicationData.title}
                author={publicationData.author}
                journal={publicationData.journal}
              />

            </div>))}
        </div>
      </div>

    </div>

  );


}

export default Home;