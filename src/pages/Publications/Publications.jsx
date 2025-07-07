import "../Publications/Publications.css";
import React, { useEffect, useState, useRef } from "react";
import publications from '../../data/publicationList.jsx';
import Publication from "../../layouts/publication/publication.jsx";


function Publications() {

  return (
    <div>
      <div className="publication-grid">
        <div className="grid-text">
          <div className="publication-header" style={{ fontSize:"50px"}}>
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
          <div style={{ marginLeft: "25px", marginRight: "30px", fontSize: "20px", textAlign: "justify" }}>
            <p>
              23) <strong  style={{fontSize:"22px"}}>Enzymatic Stereodivergent Synthesis of Azaspiro[2.y]alkanes.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kennemur, J. L.; Long, Y.; Ko, C. J.; Das, A.; Arnold, F. H. <em>Submitted.</em>
            </p>

            <p>
              22) <strong  style={{fontSize:"22px"}}>Reaction Discovery Using Spectroscopic Insights from an Enzymatic C–H Amination Intermediate.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das, A.;<sup>†</sup> Gao, S.;<sup>†</sup> Lal, R. G.; Hicks, M. H.; Oyala, P. H.; Arnold, F. H.
              <a href="https://pubs.acs.org/doi/abs/10.1021/jacs.4c05761" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2024</strong>, <em>146</em>, 20556–20562.
              </a>
            </p>

            <p>
              21) <strong  style={{fontSize:"22px"}}>Biocatalytic, Enantioenriched Primary Amination of Tertiary C–H Bonds.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mao, R.; Gao, S.; Qin, Z.-Y.; Rogge, T.; Wu, S. J.; Li, Z.-Q.; Das, A.; Houk, K. N.; Arnold, F. H.
              <a href="https://www.nature.com/articles/s41929-024-01149-w" target="_blank" rel="noopener noreferrer">
                <em>Nat. Catal.</em> <strong>2024</strong>, <em>7</em>, 585–592.
              </a>
            </p>

            <p>
              20) <strong  style={{fontSize:"22px"}}>Enzymatic Assembly of Diverse Lactone Structures: An Intramolecular C–H Functionalization Strategy.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wackelin, D. J.; Mao, R.; Sicinski, K. M.; Zhao, Y.; Das, A.; Chen, K.; Arnold, F. H.
              <a href="https://pubs.acs.org/doi/10.1021/jacs.3c11722" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2024</strong>, <em>146</em>, 1580–1587.
              </a>
            </p>

            <p>
              19) <strong  style={{fontSize:"22px"}}>Expanding Biocatalysis for Organosilane Functionalization: Enantioselective Nitrene Transfer to Benzylic Si–C–H Bonds.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das, A.; <sup>†</sup> Long, Y.; <sup>†</sup> Maar, R. R.; Roberts, J. M.; Arnold, F. H.
              <a href="https://pubs.acs.org/doi/10.1021/acscatal.3c05370" target="_blank" rel="noopener noreferrer">
                <em>ACS Catal.</em> <strong>2024</strong>, <em>14</em>, 148–152.
              </a> (ACS Editor’s Choice)
            </p>

            <p>
              18) <strong  style={{fontSize:"22px"}}>Directed Evolution of P411 Enzymes for Amination of Inert C–H Bonds.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das, A.; Gao, S.; Athavale, S. V.; Alfonzo, E.; Long, Y.; Arnold, F. H.
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S007668792300318X?via%3Dihub" target="_blank" rel="noopener noreferrer">
                <em>Methods Enzymol.</em> <strong>2023</strong>, <em>693</em>, 1–30.
              </a>
            </p>

            <p>
              17) <strong  style={{fontSize:"22px"}}>Enzymatic Nitrogen Incorporation Using Hydroxylamine.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gao, S.; Das, A.; Alfonzo, E.; Sicinski, K. M.; Rieger, D.; Arnold, F. H.
              <a href="https://pubs.acs.org/doi/10.1021/jacs.3c08053" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2023</strong>, <em>145</em>, 20196–20201.
              </a>
            </p>

            <p>
              16) <strong  style={{fontSize:"22px"}}>Development of Non-Classical Photoprecursors for Rh<sub>2</sub> Nitrenes.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paikar, A.; Van Trieste III, G. P.; Das, A.; Wang, C.-W.; Sill, T. E.; Bhuvanesh, N.; Powers, D. C.
              <a href="https://pubs.acs.org/doi/full/10.1021/acs.inorgchem.3c01820" target="_blank" rel="noopener noreferrer">
                <em>Inorg. Chem.</em> <strong>2023</strong>, <em>62</em>, 12557–12564.
              </a>
            </p>

            <p>
              15) <strong  style={{fontSize:"22px"}}>Enantio- and Diastereoenriched Enzymatic Synthesis of 1,2,3-Polysubstituted Cyclopropanes from (Z/E)-Trisubstituted Enol Acetates.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mao, R.; Wackelin, D. J.; Jamieson, C. S.; Rogge, T.; Gao, S.; Das, A.; Taylor, D. M.; Houk, K. N.; Arnold, F. H.
              <a href="https://pubs.acs.org/doi/10.1021/jacs.3c04870" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2023</strong>, <em>145</em>, 16176–16185.
              </a>
            </p>

            <p>
              14) <strong  style={{fontSize:"22px"}}>Protoglobin-catalyzed formation of cis-trifluoromethyl-substituted cyclopropanes via carbene transfer.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Schaus, L.; <sup>†</sup> Das, A.; <sup>†</sup> Knight, A. M.; Jimenez-Osés, G.; Houk, K. N.; Garcia-Borràs, M.; Arnold, F. H.; Huang, X.
              <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.202208936" target="_blank" rel="noopener noreferrer">
                <em>Angew. Chem. Int. Ed.</em> <strong>2023</strong>, <em>62</em>, e202208936.
              </a>
            </p>

            <p>
              13) <strong  style={{fontSize:"22px"}}>Enzymatic Nitrogen Insertion into Unactivated C–H Bonds.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Athavale, S. V.; <sup>†</sup> Gao, S.; <sup>†</sup> Das, A.; <sup>†</sup> Mallojjala, S. C.; Alfonzo, E.; Long, Y.; Hirschi, J. S.; Arnold, F. H.
              <a href="https://pubs.acs.org/doi/10.1021/jacs.2c08285" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2022</strong>, <em>144</em>, 19097–19105.
              </a> (Perspective: <a href="https://www.science.org/content/blog-post/zapping-amine-groups" target="_blank" rel="noopener noreferrer">‘Zapping In Amine Groups’</a>; Highlights:
              <a href="https://www.thieme-connect.de/products/ejournals/abstract/10.1055/s-0042-1751781" target="_blank" rel="noopener noreferrer">Synfacts 2023, 19, 81</a>;
              <a href="https://www.cell.com/chem-catalysis/fulltext/S2667-1093(22)00653-4" target="_blank" rel="noopener noreferrer">Chem Catal. 2022, 2, 3287</a>)
            </p>          </div>
          <br />
          <div style={{ justifyItems: "center", fontSize: "24px" }}> <p><strong>At Texas A&amp;M University</strong></p></div>
          <div style={{ marginLeft: "25px", marginRight: "30px", fontSize: "20px", textAlign: "justify" }}>

            <p>
              12) <strong  style={{fontSize:"22px"}}>New Additions to the Arsenal of Biocatalysts for Non-canonical Amino Acid Synthesis.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alfonzo, E.; Das, A.; Arnold, F. H. <em>Curr. Opin. Green Sustain. Chem.</em> <strong>2022</strong>, <em>38</em>, 100701. DOI:
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S2452223622001134?via%3Dihub" target="_blank" rel="noopener noreferrer">10.1016/j.cogsc.2022.100701</a>
            </p>

            <p>
              11) <strong  style={{fontSize:"22px"}}>Nitrene Photochemistry of Manganese N‑Haloamides.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Van Trieste III, G. P.; Reid, K. A.; Hicks, M. H.; Das, A.; Figgins, M. T.; Bhuvanesh, N.; Ozarowski, A.; Telser, J.; Powers, D. C.
              <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.202108304" target="_blank" rel="noopener noreferrer">
                <em>Angew. Chem. Int. Ed.</em> <strong>2021</strong>, <em>60</em>, 26647–26655.
              </a>
            </p>

            <p>
              10) <strong  style={{fontSize:"22px"}}>Dual Polymerization Pathway for Polyolefin‑Polar Block Copolymer Synthesis via MILRad: Mechanism and Scope.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dau, H.; Keyes, A.; Basbug Alhan, H. E.; Ordonez, E.; Tsogtgerel, E.; Gies, A. P.; Auyeung, E.; Zhou, Z.; Maity, A.; Das, A.; Powers, D. C.; Beezer, D. B.; Harth, E.
              <a href="https://pubs.acs.org/doi/abs/10.1021/jacs.0c10588" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2020</strong>, <em>142</em>, 21469–21483.
              </a>
            </p>

            <p>
              9) <strong  style={{fontSize:"22px"}}>In Crystallo Snapshots of Rh<sub>2</sub>-Catalyzed C–H Amination.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das, A.; Wang, C.-H.; Van Trieste III, G. P.; Sun, C.-J.; Chen, Y.-S.; Reibenspies, J. H.; Powers, D. C.
              <a href="https://pubs.acs.org/doi/abs/10.1021/jacs.0c09842" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2020</strong>, <em>142</em>, 19862–19867.
              </a>
              (Highlight: <a href="https://www.nature.com/articles/s41570-020-00243-4" target="_blank" rel="noopener noreferrer">Nat. Rev. Chem. 2021, 5, 2</a>)
            </p>

            <p>
              8) <strong  style={{fontSize:"22px"}}>C–H Amination Mediated by Cobalt Organoazide Adducts and the Corresponding Cobalt Nitrenoid Intermediates.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Baek, Y.; Das, A.; Zheng, S.-L.; Reibenspies, J. H.; Powers, D. C.; Betley, T. A.
              <a href="https://pubs.acs.org/doi/10.1021/jacs.0c04252" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2020</strong>, <em>142</em>, 11232–11243.
              </a>
            </p>

            <p>
              7) <strong  style={{fontSize:"22px"}}>Kinetic versus Thermodynamic Metalation Enables Synthesis of Isostructural Homo- and Heterometallic Trinuclear Clusters.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hyun, S.-M.; Upadhyay, A.; Das, A.; Burns, C. P.; Sung, S.; Beaty, J. D.; Bhuvanesh, N.; Nippe, M.; Powers, D. C.
              <a href="https://pubs.rsc.org/en/content/articlelanding/2020/cc/d0cc02346a" target="_blank" rel="noopener noreferrer">
                <em>Chem. Commun.</em> <strong>2020</strong>, <em>56</em>, 5893–5896.
              </a>
            </p>

            <p>
              6) <strong  style={{fontSize:"22px"}}>Crystallography of Reactive Intermediates.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das, A.; Van Trieste III, G. P.; Powers, D. C.
              <a href="https://www.tandfonline.com/doi/abs/10.1080/02603594.2020.1747054" target="_blank" rel="noopener noreferrer">
                <em>Comment Inorg. Chem.</em> <strong>2020</strong>, <em>40</em>, 116–158.
              </a>
            </p>

            <p>
              5) <strong  style={{fontSize:"22px"}}>Characterization of a Reactive Rh<sub>2</sub> Nitrenoid by Crystalline Matrix Isolation.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das, A.; Chen, Y.-S.; Reibenspies, J. H.; Powers, D. C.
              <a href="https://pubs.acs.org/doi/10.1021/jacs.9b09064" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2019</strong>, <em>141</em>, 16232–16236.
              </a>
            </p>

            <p>
              4) <strong  style={{fontSize:"22px"}}>Observation of a Photogenerated Rh<sub>2</sub> Nitrenoid Intermediate in C–H Amination.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das, A.; Maher, A. G.; Telser, J.; Powers, D. C.
              <a href="https://pubs.acs.org/doi/10.1021/jacs.8b05599" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2018</strong>, <em>140</em>, 10412–10415.
              </a>
            </p>

            <p>
              3) <strong  style={{fontSize:"22px"}}>Probing Substrate Diffusion in Interstitial MOF Chemistry with Kinetic Isotope Effects.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wang, C.-H.; Das, A.; Gao, W.-Y.; Powers, D. C.
              <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201713244" target="_blank" rel="noopener noreferrer">
                <em>Angew. Chem. Int. Ed.</em> <strong>2018</strong>, <em>57</em>, 3676–3681.
              </a>
            </p>

            <p>
              2) <strong  style={{fontSize:"22px"}}>Direct Characterization of a Reactive Ru<sub>2</sub> Nitride by Photocrystallography.</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das, A.; Reibenspies, J. H.; Chen, Y.-S.; Powers, D. C.
              <a href="https://pubs.acs.org/doi/10.1021/jacs.6b13357" target="_blank" rel="noopener noreferrer">
                <em>J. Am. Chem. Soc.</em> <strong>2017</strong>, <em>139</em>, 2912–2915.
              </a>
            </p>

          </div>
          <br />
          <div style={{ justifyItems: "center", fontSize: "24px" }}> <p><strong>At IIT Kharagpur</strong></p></div>
          <div style={{ marginLeft: "25px", marginRight: "30px", fontSize: "20px", textAlign: "justify" }}>
 <p>
    1) <strong style={{fontSize:"22px"}}>Pd-free Sonogashira coupling: one-pot synthesis of phthalide via domino Sonogashira coupling and 5-exo-dig cyclization.</strong><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dhara, S.; Singha, R.; Ghosh, M.; Ahmed, A.; Nuree, Y.; Das, A.; Ray, J. K.
    <a href="https://pubs.rsc.org/en/content/articlelanding/2014/ra/c4ra07639g" target="_blank" rel="noopener noreferrer">
      <em>RSC Adv.</em> <strong>2014</strong>, <em>4</em>, 42604–42607.
    </a>
  </p>          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications;