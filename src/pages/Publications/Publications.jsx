import "../Publications/Publications.css";
import React, { useEffect, useState, useRef } from "react";
import publications from '../../data/publicationList.jsx';
import Publication from "../../layouts/publication/publication.jsx";
import PublicationItem from "../../layouts/PublicationItem/PublicationItem.jsx";


function Publications() {

  return (
    <div>
      <div className="publication-grid">
        <div className="grid-text">
          <div className="publication-header" style={{ fontSize: "50px" }}>
            Publications
          </div>

        </div>
        <div />
      </div>
      <div className="publication-section" style={{ backgroundImage: "none" }}>
        <div className="header mentored-header">
          Independent Work
          <div className="mentored-line" /><br></br>
          <div style={{ justifySelf: "center" }}>Coming Soon...</div>

        </div>

        {(publications.publicationPapers.length > 0) && (
          <>
            <div className="header mentored-header">
              <u>Independent Work</u>
            </div>

            <div className="all-publications">
              {publications.publicationPapers.map(publicationData => (
                <div className="publication-card" key={publicationData.id}>
                  <Publication
                    image={publicationData.image}
                    title={publicationData.title}
                    author={publicationData.author}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        <br></br><br></br>
        <div className="header mentored-header" >
          Mentored Work
          <div className="mentored-line" />
        </div>
        <div className="all-publications">
          <div style={{ justifyItems: "center", fontSize: "24px" }}>  <p><strong>At California Institute of Technology</strong></p></div>
          <div style={{marginRight: "15rem", fontSize: "20px", textAlign: "justify" }}>

            {publications.mentoredPaper.cali.map(publicationData => (
              <div  key={publicationData.id}>
                <PublicationItem
                  index={publicationData.index}
                  title={publicationData.title}
                  authors={publicationData.authors}
                  journal={publicationData.journal}
                  link={publicationData.link}
                  perspective={publicationData.perspective}
                  highlights={publicationData.highlights}
                />
              </div>
            ))}
          </div>
          <div style={{ justifyItems: "center", fontSize: "24px" }}>  <p><strong>At Texas A&M University</strong></p></div>
          <div style={{marginRight: "15rem", fontSize: "20px", textAlign: "justify" }}>

            {publications.mentoredPaper.texas.map(publicationData => (
              <div  key={publicationData.id}>
                <PublicationItem
                  index={publicationData.index}
                  title={publicationData.title}
                  authors={publicationData.authors}
                  journal={publicationData.journal}
                  link={publicationData.link}
                  perspective={publicationData.perspective}
                     highlights={publicationData.highlights}
                />
              </div>
            ))}
          </div>
          <div style={{ justifyItems: "center", fontSize: "24px" }}>  <p><strong>At IIT Kharagpur</strong></p></div>
          <div style={{marginRight: "15rem", fontSize: "20px", textAlign: "justify" }}>

            {publications.mentoredPaper.kharagpur.map(publicationData => (
              <div  key={publicationData.id}>
                <PublicationItem
                  index={publicationData.index}
                  title={publicationData.title}
                  authors={publicationData.authors}
                  journal={publicationData.journal}
                  link={publicationData.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications;