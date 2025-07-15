import "../Research/Research.css";
import React, { useEffect, useState, useRef } from "react";
import research from '../../assets/images/Research.jpg';
import researchPic from '../../assets/images/researchPaper1.png';

function Research() {
    return (
        <div>
        <div className="research-grid">
            <div className="grid-text">
                <div className="publication-header" style={{ fontSize:"50px"}}>
                    Research
                </div>
                </div>
                <div />
                </div>
               
      
                <div className="research-tab">
                    <div className="research-image" style={{marginBottom:"5px"}}>
                        <img src={researchPic}/>
                    </div>
                    <div style={{fontSize: "clamp(1rem, 2vw, 1.2rem)"}}>Chemical catalysis lies at the heart of many unmet challenges in synthetic chemistry and
                    small-molecule activation. Enzymes, nature’s catalysts, can perform extraordinary
                    transformations and allow living organisms to construct complex molecules from simple
                    precursors. Through natural evolution, a vast array of highly precise and efficient enzymes
                    has emerged, exhibiting catalytic abilities beyond the reach of human chemists. A key
                    characteristic of these catalysts is their catalytic promiscuity—enzymes can facilitate
                    unintended side reactions alongside their primary, evolutionarily selected functions.
                    Importantly, these promiscuous activities drive the evolution of new enzymes when
                    environmental changes create a selective advantage such novel functions. Research in the
                    Das group focuses on developing sustainable synthetic methods by evolving enzymes under
                    laboratory conditions and investigating how these enzymes functionalize organic molecules.
                    Specifically, we aim to engineer and harness these enzymes to control the chemo-, regio-,
                    and stereoselectivity of chemical reactions. To achieve this, lab members will employ tools
                    from synthetic chemistry, molecular biology, structural biology, and various spectroscopic
                    techniques to advance sustainable catalysis and elucidate the structures of reactive
                    bioinorganic fragments.</div>
                    
        
                    <div style={{ display: "flex", justifyContent: "center",fontSize: "clamp(1rem, 2vw, 1.2rem)" }}><a href="/join-us" > <strong>If our research sparks your interest, come join us!</strong></a></div>
                    
            </div>
            </div>
    )
}

export default Research; 