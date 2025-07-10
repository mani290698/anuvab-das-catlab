import "../Resources/Resource.css";
import React, { useEffect, useState, useRef } from "react";

function Resource() {
    return (
        <div>
            <div className="resource-grid">
                <div className="grid-text">
                    <div className="publication-header" style={{ fontSize:"50px"}}>
                        Resources
                    </div>
                </div>
                <div />
            </div>
            <div className="team-profile-section">
                <div className="top-profile">
                </div>
                <div className="resource-tab">
                    <u><h3>Graduate Fellowships</h3></u>

                    <ul style={{ textAlign: 'justify', paddingLeft: '20px', fontSize:"clamp(1rem, 2.5vw, 1.25rem)" }}>
                       <strong>– </strong><a href="https://www.ntu.edu.sg/admissions/graduate/financialmatters/scholarships/npgs" target="_blank" rel="noopener noreferrer">Nanyang President's Graduate Scholarship (NGPS)</a><br></br>
                       <strong>– </strong> <a href="https://www.ntu.edu.sg/admissions/graduate/financialmatters/scholarships/pga" target="_blank" rel="noopener noreferrer">Provost Graduate Award (PGA)</a><br></br>
                        <strong>– </strong><a href="https://www.ntu.edu.sg/admissions/graduate/financialmatters/scholarships/rss" target="_blank" rel="noopener noreferrer">NTU Research Scholarship</a><br></br>
                        <strong>– </strong><a href="https://www.a-star.edu.sg/Scholarships/for-graduate-studies/a-star-graduate-scholarship-singapore" target="_blank" rel="noopener noreferrer">A*STAR Graduate Scholarship (AGS)</a><br></br>
                       <strong>– </strong> <a href="https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa" target="_blank" rel="noopener noreferrer">Singapore International Graduate Award (SINGA)</a>
                    </ul><br></br>
                    </div>
                      <div className="resource-tab">
                    <u><h3>Postdoc Fellowships</h3></u>

                    <ul style={{ textAlign: 'justify', paddingLeft: '20px', fontSize:"clamp(1rem, 2.5vw, 1.25rem)" }}>
                         <strong>– </strong><a href="https://www.ntu.edu.sg/research/research-careers/presidential-postdoctoral-fellowship-(ppf)" target="_blank" rel="noopener noreferrer">NTU Presidential Postdoctoral Fellowship (NTU PPF)</a><br></br>
                        <strong>– </strong> <a href="https://www.ntu.edu.sg/research/research-careers/lee-kuan-yew-postdoctoral-fellowship-(lkypdf)" target="_blank" rel="noopener noreferrer">Lee Kuan Yew Postdoctoral Fellowship (LKYPDF)</a>
                    </ul><br></br>
                    </div>
                      <div className="resource-tab">
                    <u><h3>Chemistry Links & Databases</h3></u>

                    <ul style={{ textAlign: 'justify', paddingLeft: '20px', fontSize:"clamp(1rem, 2.5vw, 1.25rem)" }}>
                        <strong>– </strong><a href="https://www.reaxys.com/#/login" target="_blank" rel="noopener noreferrer">Reaxys</a>, <a href="https://sso.cas.org/as/authorization.oauth2?response_type=code&client_id=scifinder-n&redirect_uri=https%3A%2F%2Fscifinder-n.cas.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoiNjZaUUdUWUNCRl9QSDB2UUJESG9feklMeXNvIiwic3VmZml4IjoicEJ6SUZ5LjE3NDIwMzA5MjMifQ..qlQmI3v7lrf8-f4Cb8pVjg.E9OtGEVp-U5qit3vk-twMrhYGECgrG0Rl7ncIl-0St7FenuakKVVtM0eiUlbmyzpJ4EyGMFwPcF1lmxBxsd_MA.c8PJk5Gti_jf1qB0_67p4Q&nonce=DwPSv4eIG_B652Mc5PyGFReafQdMmUjvWlEFN5Y4ctA&scope=openid%20address%20email%20phone%20profile&vnd_pi_requested_resource=https%3A%2F%2Fscifinder-n.cas.org%2F&vnd_pi_application_name=SciFinder-nIDF" target="_blank" rel="noopener noreferrer"> SciFinder</a> and <a href="https://access.clarivate.com/login?app=wos&alternative=true&shibShireURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fauth%3DShibboleth&shibReturnURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fmode%3DNextgen%26action%3Dtransfer%26path%3D%252Fwos%252Fwoscc%252Fbasic-search%26DestApp%3DUA&referrer=mode%3DNextgen%26path%3D%252Fwos%252Fwoscc%252Fbasic-search%26DestApp%3DUA%26action%3Dtransfer&roaming=true" target="_blank" rel="noopener noreferrer">Web of Science</a><br></br>
                        <strong>– </strong> <a href="https://www.expasy.org/" target="_blank" rel="noopener noreferrer">Expasy</a><br></br>
                        <strong>– </strong> <a href="https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb" target="_blank" rel="noopener noreferrer">AlphaFold2</a><br></br>
                         <strong>– </strong><a href="https://metacyc.org/" target="_blank" rel="noopener noreferrer">MetaCyc</a><br></br>
                        <strong>– </strong> <a href="https://journals.iucr.org/b/services/authorservices.html" target="_blank" rel="noopener noreferrer">IUCr (for Authors)</a><br></br>
                        <strong>– </strong> <a href="https://jmol.sourceforge.net/jscolors/" target="_blank" rel="noopener noreferrer">Ellipsoid Colors for Crystallography</a><br></br>
                        <strong>– </strong> <a href="https://easyspin.org/easyspin/documentation/isotopetable.html" target="_blank" rel="noopener noreferrer">Nuclear Isotope Database (EPR)</a><br></br>
                        <strong>– </strong> <a href="https://organicchemistrydata.org/" target="_blank" rel="noopener noreferrer">Organic Chemistry Data</a><br></br>
                        <strong>– </strong> <a href="https://pubs.acs.org/doi/10.1021/om100106e" target="_blank" rel="noopener noreferrer">Chemical Shifts of Trace Impurities (NMR)</a><br></br>
                       <strong>– </strong><a href="https://www.chemistry.ucla.edu/safety-videos/" target="_blank" rel="noopener noreferrer">Safety Videos – UCLA</a><br></br>
                        <strong>– </strong> <a href="https://safetynet.web.unc.edu/" target="_blank" rel="noopener noreferrer">The Safety Net</a>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Resource;