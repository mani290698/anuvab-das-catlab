import "../Footer/footer.css";
import lablogo from '../../assets/images/LogoFooter.jpg'
import NTU from '../../assets/images/NTU1.jpg'
import twitter from '../../assets/images/Twitter logo.jpg';
// import linkedin from '../../assets/images/linkedin1.png';
import bluesky from '../../assets/images/Bluesky logo.jpg';

function Footer() {
    return (
        <div>
            <div className="whole-footer">
                <div className="ntu-logo">
                    <img src={NTU} style={{ height: '130px', width: 'auto' }} />
                </div>
                <div className="footer">

                    <img src={lablogo} style={{ height: '60px', width: 'auto', marginBottom: "20px" }} />
                    <a href="https://mail.google.com/mail/?view=cm&to=anuvab.das@ntu.edu.sg"
                        target="_blank"
                        rel="noopener noreferrer"><h5 style={{color:"black",marginBottom: "20px",fontStyle:"italic" }}>anuvab.das@ntu.edu.sg</h5></a>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                        
                        <a href=" https://x.com/Das_ChemLab" target="_blank"
                        rel="noopener noreferrer"> <img
                            src={twitter}// Replace with your actual image path
                            alt="Twitter"
                            style={{ width: "26px", height: "26px" }}
                        />&nbsp;
                            <span style={{ color: "black", fontSize: "1.2rem", fontWeight: "500",fontStyle:"italic"}}>Das_ChemLab</span></a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        
                        <a href="https://bsky.app/profile/das-lab.bsky.social" target="_blank"
                        rel="noopener noreferrer"><img
                            src={bluesky}// Replace with your actual image path
                            alt="Bluesky"
                            style={{ width: "26px", height: "26px" }}
                        /> &nbsp;
                            <span style={{ color: "black", fontSize: "1.2rem", fontWeight: "500",fontStyle:"italic"}}>das-lab</span></a>

                    </div>

                </div>
                <div className="footer-address" style={{ textAlign: "left" }} >
                    <h5>Nanyang Technological University</h5>
                    <h5>School of Chemistry, Chemical Engineering & Biotechnology</h5>
                    <h5>21 Nanyang Link, CCEB-06-21</h5>
                    <h5>Singapore 637371</h5>

                </div>
            </div>
        </div>
    )
}

export default Footer;