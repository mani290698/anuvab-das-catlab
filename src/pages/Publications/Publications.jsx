import "../Publications/Publications.css";
import React, { useEffect, useState, useRef } from "react";
import publications from '../../data/publicationList.jsx';
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
 <div style={{justifyItems:"center", fontSize:"24px"}}>  <p><strong>At California Institute of Technology</strong></p></div>
 <div style={{marginLeft:"25px", marginRight:"30px", fontSize:"20px", textAlign:"justify"}}>
  <p>23) Kennemur, J. L.; Long, Y.; Ko, C. J.; Das, A.; Arnold, F. H. <em>Enzymatic Stereodivergent Synthesis of Azaspiro[2.y]alkanes.</em> Submitted.</p>
  <p>22) <strong>Reaction Discovery Using Spectroscopic Insights from an Enzymatic C–H Amination Intermediate.</strong><br></br>Das, A.;† Gao, S.;† Lal, R. G.; Hicks, M. H.; Oyala, P. H.; Arnold, F. H.  <a href="https://pubs.acs.org/doi/abs/10.1021/jacs.4c05761"><em>J. Am. Chem. Soc.</em> <strong>2024</strong>, <em>146</em>, 20556–20562.</a></p>
  <p>21) Mao, R.; Gao, S.; Qin, Z.-Y.; Rogge, T.; Wu, S. J.; Li, Z.-Q.; Das, A.; Houk, K. N.; Arnold, F. H. <em>Biocatalytic, Enantioenriched Primary Amination of Tertiary C–H Bonds.</em> Nat. Catal. 2024, 7, 585–592. DOI: <a href="https://www.nature.com/articles/s41929-024-01149-w">10.1038/s41929-024-01149-w</a></p>
  <p>20) Wackelin, D. J.; Mao, R.; Sicinski, K. M.; Zhao, Y.; Das, A.; Chen, K.; Arnold, F. H. <em>Enzymatic Assembly of Diverse Lactone Structures: An Intramolecular C–H Functionalization Strategy.</em> J. Am. Chem. Soc. 2024, 146, 1580–1587. DOI: <a href="https://pubs.acs.org/doi/10.1021/jacs.3c11722">10.1021/jacs.3c11722</a></p>
  <p>19) Das, A.; † Long, Y.; † Maar, R. R.; Roberts, J. M.; Arnold, F. H. <em>Expanding Biocatalysis for Organosilane Functionalization: Enantioselective Nitrene Transfer to Benzylic Si–C–H Bonds.</em> ACS Catal. 2024, 14, 148–152. DOI: <a href="https://pubs.acs.org/doi/10.1021/acscatal.3c05370">10.1021/acscatal.3c05370</a> (ACS Editor’s Choice)</p>
  <p>18) Das, A.; Gao, S.; Athavale, S. V.; Alfonzo, E.; Long, Y.; Arnold, F. H. <em>Directed Evolution of P411 Enzymes for Amination of Inert C–H Bonds.</em> Methods Enzymol. 2023, 693, 1–30. DOI: <a href="https://www.sciencedirect.com/science/article/abs/pii/S007668792300318X?via%3Dihub">10.1016/bs.mie.2023.09.009</a></p>
  <p>17) Gao, S.; Das, A.; Alfonzo, E.; Sicinski, K. M.; Rieger, D.; Arnold, F. H. <em>Enzymatic Nitrogen Incorporation Using Hydroxylamine.</em> J. Am. Chem. Soc. 2023, 145, 20196–20201. DOI: <a href="https://pubs.acs.org/doi/10.1021/jacs.3c08053">10.1021/jacs.3c08053</a></p>
  <p>16) Paikar, A.; Van Trieste III, G. P.; Das, A.; Wang, C.-W.; Sill, T. E.; Bhuvanesh, N.; Powers, D. C. <em>Development of Non-Classical Photoprecursors for Rh<sub>2</sub> Nitrenes.</em> Inorg. Chem. 2023, 62, 12557–12564. DOI: <a href="https://pubs.acs.org/doi/full/10.1021/acs.inorgchem.3c01820">10.1021/acs.inorgchem.3c01820</a></p>
  <p>15) Mao, R.; Wackelin, D. J.; Jamieson, C. S.; Rogge, T.; Gao, S.; Das, A.; Taylor, D. M.; Houk, K. N.; Arnold, F. H. <em>Enantio- and Diastereoenriched Enzymatic Synthesis of 1,2,3-Polysubstituted Cyclopropanes from (Z/E)-Trisubstituted Enol Acetates.</em> J. Am. Chem. Soc. 2023, 145, 16176–16185. DOI: <a href="https://pubs.acs.org/doi/10.1021/jacs.3c04870">10.1021/jacs.3c04870</a></p>
  <p>14) Schaus, L.; † Das, A.; † Knight, A. M.; Jimenez-Osés, G.; Houk, K. N.; Garcia-Borràs, M.; Arnold, F. H.; Huang, X. <em>Protoglobin-catalyzed formation of cis-trifluoromethyl-substituted cyclopropanes via carbene transfer.</em> Angew. Chem. Int. Ed. 2023, 62, e202208936. DOI: <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.202208936">10.1002/anie.202208936</a></p>
  <p>13) Athavale, S. V.; † Gao, S.; † Das, A.; † Mallojjala, S. C.; Alfonzo, E.; Long, Y.; Hirschi, J. S.; Arnold, F. H. <em>Enzymatic Nitrogen Insertion into Unactivated C–H Bonds.</em> J. Am. Chem. Soc. 2022, 144, 19097–19105. DOI: <a href="https://pubs.acs.org/doi/10.1021/jacs.2c08285">10.1021/jacs.2c08285</a> (Perspective: <a href="https://www.science.org/content/blog-post/zapping-amine-groups">‘Zapping In Amine Groups’</a> by Derek Lowe. Highlights: <a href="https://www.thieme-connect.de/products/ejournals/abstract/10.1055/s-0042-1751781">Synfacts 2023, 19, 81</a>; <a href="https://www.cell.com/chem-catalysis/fulltext/S2667-1093(22)00653-4">Chem Catal. 2022, 2, 3287</a></p>
  <p>12) Alfonzo, E.; Das, A.; Arnold, F. H. <em>New Additions to the Arsenal of Biocatalysts for Non-canonical Amino Acid Synthesis.</em> Curr. Opin. Green Sustain. Chem. 2022, 38, 100701. DOI: <a href="https://www.sciencedirect.com/science/article/abs/pii/S2452223622001134?via%3Dihub">10.1016/j.cogsc.2022.100701</a></p>
</div>
  <br />
  <div style={{justifyItems:"center", fontSize:"24px"}}> <p><strong>At Texas A&amp;M University</strong></p></div>
  <div style={{marginLeft:"25px", marginRight:"30px", fontSize:"20px", textAlign:"justify"}}>
  <p>11) Van Trieste III, G. P.; Reid, K. A.; Hicks, M. H.; Das, A.; Figgins, M. T.; Bhuvanesh, N.; Ozarowski, A.; Telser, J.; Powers, D. C. <em>Nitrene Photochemistry of Manganese N-Haloamides.</em> Angew. Chem. Int. Ed. 2021, 60, 26647–26655. DOI: <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.202108304">10.1002/anie.202108304</a></p>
  <p>10) Dau, H.; Keyes, A.; Basbug Alhan, H. E.; Ordonez, E.; Tsogtgerel, E.; Gies, A. P.; Auyeung, E.; Zhou, Z.; Maity, A.; Das, A.; Powers, D. C.; Beezer, D. B.; Harth, E. <em>Dual Polymerization Pathway for Polyolefin-Polar Block Copolymer Synthesis via MILRad: Mechanism and Scope.</em> J. Am. Chem. Soc. 2020, 142, 21469–21483. DOI: <a href="https://pubs.acs.org/doi/abs/10.1021/jacs.0c10588">10.1021/jacs.0c10588</a></p>
  <p>9) Das, A.; Wang, C.-H.; Van Trieste III, G. P.; Sun, C.-J.; Chen, Y.-S.; Reibenspies, J. H.; Powers, D. C. <em>In Crystallo Snapshots of Rh<sub>2</sub>-Catalyzed C–H Amination.</em> J. Am. Chem. Soc. 2020, 142, 19862–19867. DOI: <a href="https://pubs.acs.org/doi/abs/10.1021/jacs.0c09842">10.1021/jacs.0c09842</a> (Highlight: <a href="https://www.nature.com/articles/s41570-020-00243-4">Nat. Rev. Chem. 2021, 5, 2</a>)</p>
  <p>8) Baek, Y.; Das, A.; Zheng, S.-L.; Reibenspies, J. H.; Powers, D. C.; Betley, T. A. <em>C–H Amination Mediated by Cobalt Organoazide Adducts and the Corresponding Cobalt Nitrenoid Intermediates.</em> J. Am. Chem. Soc. 2020, 142, 11232–11243. DOI: <a href="https://pubs.acs.org/doi/10.1021/jacs.0c04252">10.1021/jacs.0c04252</a></p>
  <p>7) Hyun, S.-M.; Upadhyay, A.; Das, A.; Burns, C. P.; Sung, S.; Beaty, J. D.; Bhuvanesh, N.; Nippe, M.; Powers, D. C. <em>Kinetic versus Thermodynamic Metalation Enables Synthesis of Isostructural Homo- and Heterometallic Trinuclear Clusters.</em> Chem. Commun. 2020, 56, 5893–5896. DOI: <a href="https://pubs.rsc.org/en/content/articlelanding/2020/cc/d0cc02346a">10.1039/D0CC02346A</a></p>
  <p>6) Das, A.; Van Trieste III, G. P.; Powers, D. C. <em>Crystallography of Reactive Intermediates.</em> Comment Inorg. Chem. 2020, 40, 116–158. DOI: <a href="https://www.tandfonline.com/doi/abs/10.1080/02603594.2020.1747054">10.1080/02603594.2020.1747054</a>10.1080/02603594.2020.1747054</p>
  <p>5) Das, A.; Chen, Y.-S.; Reibenspies, J. H.; Powers, D. C. <em>Characterization of a Reactive Rh<sub>2</sub> Nitrenoid by Crystalline Matrix Isolation.</em> J. Am. Chem. Soc. 2019, 141, 16232–16236. DOI: <a href="https://pubs.acs.org/doi/10.1021/jacs.9b09064">10.1021/jacs.9b09064</a></p>
  <p>4) Das, A.; Maher, A. G.; Telser, J.; Powers, D. C. <em>Observation of a Photogenerated Rh<sub>2</sub> Nitrenoid Intermediate in C–H Amination.</em> J. Am. Chem. Soc. 2018, 140, 10412–10415. DOI: <a href="https://pubs.acs.org/doi/10.1021/jacs.8b05599">10.1021/jacs.8b05599</a></p>
  <p>3) Wang, C.-H.; Das, A.; Gao, W.-Y.; Powers, D. C. <em>Probing Substrate Diffusion in Interstitial MOF Chemistry with Kinetic Isotope Effects.</em> Angew. Chem. Int. Ed. 2018, 57, 3676–3681. DOI: <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201713244">10.1002/anie.201713244</a></p>
  <p>2) Das, A.; Reibenspies, J. H.; Chen, Y.-S.; Powers, D. C. <em>Direct Characterization of a Reactive Ru<sub>2</sub> Nitride by Photocrystallography.</em> J. Am. Chem. Soc. 2017, 139, 2912–2915. DOI: <a href="https://pubs.acs.org/doi/10.1021/jacs.6b13357">10.1021/jacs.6b13357</a></p>
</div>
  <br />
  <div style={{justifyItems:"center", fontSize:"24px"}}> <p><strong>At IIT Kharagpur</strong></p></div>
   <div style={{marginLeft:"25px", marginRight:"30px", fontSize:"20px", textAlign:"justify"}}>
  <p>1) Dhara S.; Singha R.; Ghosh M.; Ahmed A.; Nuree Y.; Das A.; Ray J. K. <em>Pd-free Sonogashira coupling: one-pot synthesis of phthalide via domino Sonogashira coupling and 5-exo-dig cyclization.</em> RSC Adv. 2014, 4, 42604–42607. DOI: <a href="https://pubs.rsc.org/en/content/articlelanding/2014/ra/c4ra07639g">10.1039/C4RA07639G</a></p>
</div>
        </div>
      </div>
    </div>
  )
}

export default Publications;