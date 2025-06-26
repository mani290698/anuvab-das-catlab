import "../Publications/Publications.css";
import React, { useEffect, useState, useRef } from "react";
import publicationPapers from '../../data/publicationList.jsx';
import Publication from "../../layouts/publication/publication.jsx";


function Publications() {

    return (
        <div>
            <div className="publication-grid">
        <div className="grid-text">
          <div className="publication-header">
            Publications
          </div>
        
        </div>
        <div />
      </div>
      <div className="publication-section" style={{ backgroundImage:"none" }}>
        <div className="header">
          <u>Independent Work</u>
        </div>
        <div className="all-publications">
          {publicationPapers.map(publicationData => (
            <div className="publication-card">
           <Publication
              image={publicationData.image}
              title={publicationData.title}
              author={publicationData.author}
            />
            <div className="publication-desc">{publicationData.journal}</div>
          </div>))}
        </div>
        <div className="header">
          <u>Mentored Work</u>
        </div>
        <div className="all-publications">
          {publicationPapers.map(publicationData => (
            <div className="publication-card">
           <Publication
              image={publicationData.image}
              title={publicationData.title}
              author={publicationData.author}
            />
            <div className="publication-desc">{publicationData.journal}<br></br> <span>Read More..</span></div>
          </div>))}
        </div>
      </div>
        </div>
    )
}

export default Publications;