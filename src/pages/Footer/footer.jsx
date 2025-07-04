import "../Footer/footer.css";
import lablogo from '../../assets/images/LogoFooter.jpg'
import NTU from '../../assets/images/NTU1.jpg'

function Footer() {
    return (
        <div>
            <div className="whole-footer">
                <div className="ntu-logo">
                    <img src={NTU} style={{ height: '130px', width: 'auto' }} />
                </div>
                <div className="footer">

                    <img src={lablogo} style={{ height: '70px', width: 'auto',marginBottom:"10px" }} />
                    <a href="anuvab.das@ntu.edu.sg"><h6>anuvab.das@ntu.edu.sg</h6></a>
                    <h6>@anuvab_chem</h6>

                </div>
             <div className="footer-address"  style={{textAlign:"left"}} >
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