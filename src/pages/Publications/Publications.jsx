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
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px', // or any height you want
          }}>
            <div>Coming Soon...</div>
          </div>

        </div>

        {(publications.publicationPapers.length > 0) && (
          <>
            {/* <div className="header mentored-header">
              <u>Independent Work</u>
            </div> */}

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
          <div style={{ display: "flex", justifyItems: "center", fontSize: "clamp(1.5rem, 2vw, 1.5rem)", justifyContent: "center" }}>  <strong>At California Institute of Technology</strong></div>
          <div className="mx-0" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", textAlign: "justify", justifySelf: "left" }}>

            {publications.mentoredPaper.cali.map(publicationData => (
              <div key={publicationData.id}>
                <PublicationItem
                  index={publicationData.index}
                  title={publicationData.title}
                  authors={publicationData.authors}
                  journal={publicationData.journal}
                  link={publicationData.link}
                  perspective={publicationData.perspective}
                  highlights={publicationData.highlights}
                  extra={publicationData.extra}
                />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", fontSize: "clamp(1.5rem, 2vw, 1.5rem)" }}> <strong>At Texas A&M University</strong></div>
          <div className="mx-0" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", textAlign: "justify", justifySelf: "left" }}>

            {publications.mentoredPaper.texas.map(publicationData => (
              <div key={publicationData.id}>
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
          <div style={{ display: "flex", justifyContent: "center", fontSize: "clamp(1.5rem, 2vw, 1.5rem)" }}> <strong>At IIT Kharagpur</strong></div>
          <div className="mx-0" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", textAlign: "justify", justifySelf: "left", width: "100%" }}>

            {publications.mentoredPaper.kharagpur.map(publicationData => (
              <div key={publicationData.id}>
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