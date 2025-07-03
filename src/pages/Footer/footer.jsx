import "../Footer/footer.css";
import lablogo from '../../assets/images/labLogo.png'
import NTU from '../../assets/images/NTU.jpg'

function Footer() {
    return (
        <div>
            <div className="whole-footer">
                <div className="ntu-logo">
                    <img src={NTU} style={{ height: '100px', width: 'auto' }} />
                </div>
                <div className="footer">

                    <img src={lablogo} style={{ height: '100px', width: 'auto',marginBottom:"10px" }} />
                    <h5>Das Lab</h5>
                    <h6>Anuvab Das</h6>
                    <h6>Assistant Professor</h6>
                    <h6>School of Chemistry, Chemical Engineering & Biotechnology</h6>
                    <h6>Nanyang Technological University</h6>

                </div>
            </div>
        </div>
    )
}

export default Footer;