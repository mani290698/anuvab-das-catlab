import "../Footer/footer.css";
import lablogo from '../../assets/images/lablogo1.png'

function Footer() {
    return (
        <div className="footer">
            <img src={lablogo} style={{height: '100px', width: '100px'}}/>
            <h5>CatLab</h5>
            <h6>Anuvab Das</h6>
            <h6>Assistant Professor</h6>
            <h6>School of Chemistry, Chemical Engineering & Biotechnology</h6>
            <h6>Nanyang Technological University</h6>
        </div>


    )
}

export default Footer;