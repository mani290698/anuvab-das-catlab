import "../Footer/footer.css";
import lablogo from '../../assets/images/LogoFooter.jpg'
import NTU from '../../assets/images/NTU1.jpg'
import twitter from '../../assets/images/Twitter_Logo.png';
import linkedin from '../../assets/images/linkedin1.png';
import bluesky from '../../assets/images/Bluesky_Logo.jpg';

function Footer() {
    return (
        <div>
            <div className="whole-footer">
                <div className="ntu-logo">
                    <img src={NTU} style={{ height: '130px', width: 'auto' }} />
                </div>
                <div className="footer">

                    <img src={lablogo} style={{ height: '70px', width: 'auto', marginBottom: "10px" }} /><br></br>
                    <a href="https://mail.google.com/mail/?view=cm&to=anuvab.das@ntu.edu.sg"
                        target="_blank"
                        rel="noopener noreferrer"><h6>anuvab.das@ntu.edu.sg</h6></a><br></br>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <img
                            src={twitter}// Replace with your actual image path
                            alt="Twitter"
                            style={{ width: "24px", height: "24px" }}
                        />
                        <a href=" https://x.com/Das_ChemLab">
                            <span style={{ color: "black" }}>Das_ChemLab</span></a>
                    </div><br></br>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <img
                            src={bluesky}// Replace with your actual image path
                            alt="Bluesky"
                            style={{ width: "24px", height: "24px" }}
                        />
                        <a href="https://bsky.app/profile/das-lab.bsky.social">
                            <span style={{ color: "black" }}>das-lab</span></a>

                    </div>

                </div>
                <div className="footer-address" style={{ textAlign: "left" }} >
                    <h6>School of Chemistry, Chemical Engineering & Biotechnology</h6>
                    <h6>Nanyang Technological University</h6>
                    <h6>21 Nanyang Link, CCEB-06-21</h6>
                    <h6>Singapore 637371</h6>

                </div>
            </div>
        </div>
    )
}

export default Footer;