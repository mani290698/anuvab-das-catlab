import "../Resources/Resource.css";
import React, { useEffect, useState, useRef } from "react";

function Resource() {
    return (
        <div>
            <div className="resource-grid">
                <div className="grid-text">
                    <div className="publication-header">
                        Resources
                    </div>
                </div>
                <div />
            </div>
            <div className="team-profile-section">
                <div className="top-profile">
                </div>
                <div className="resource-tab">
                    <div className="box">
                    <u><h3>Graduate Fellowships</h3></u><br></br>

                    <ul style={{ textAlign: 'justify', paddingLeft: '20px', fontSize:"20px" }}>
                       <strong>– </strong><a href="https://www.ntu.edu.sg/admissions/graduate/financialmatters/scholarships/npgs">Nanyang President's Graduate Scholarship (NGPS)</a><br></br>
                       <strong>– </strong> <a href="https://www.ntu.edu.sg/admissions/graduate/financialmatters/scholarships/pga">Provost Graduate Award (PGA)</a><br></br>
                        <strong>– </strong><a href="https://www.ntu.edu.sg/admissions/graduate/financialmatters/scholarships/rss">NTU Research Scholarship</a><br></br>
                        <strong>– </strong><a href="https://www.a-star.edu.sg/Scholarships/for-graduate-studies/a-star-graduate-scholarship-singapore">A*STAR Graduate Scholarship (AGS)</a><br></br>
                       <strong>– </strong> <a href="https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa">Singapore International Graduate Award (SINGA)</a>
                    </ul><br></br>
                    </div>
                    <u><h3>Postdoc Fellowships</h3></u><br></br>

                    <ul style={{ textAlign: 'justify', paddingLeft: '20px', fontSize:"20px" }}>
                        <a href="https://www.ntu.edu.sg/research/research-careers/presidential-postdoctoral-fellowship-(ppf)"><li>NTU Presidential Postdoctoral Fellowship (NTU PPF)</li></a>
                        <a href="https://www.ntu.edu.sg/research/research-careers/lee-kuan-yew-postdoctoral-fellowship-(lkypdf)"><li>Lee Kuan Yew Postdoctoral Fellowship (LKYPDF)</li></a>
                    </ul><br></br>
                    <u><h3>Chemistry Links & Databases</h3></u><br></br>

                    <ul style={{ textAlign: 'justify', paddingLeft: '20px', fontSize:"20px" }}>
                        <li><a href="https://www.reaxys.com/#/login">Reaxys</a>, <a href="https://sso.cas.org/as/authorization.oauth2?response_type=code&client_id=scifinder-n&redirect_uri=https%3A%2F%2Fscifinder-n.cas.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoiNjZaUUdUWUNCRl9QSDB2UUJESG9feklMeXNvIiwic3VmZml4IjoicEJ6SUZ5LjE3NDIwMzA5MjMifQ..qlQmI3v7lrf8-f4Cb8pVjg.E9OtGEVp-U5qit3vk-twMrhYGECgrG0Rl7ncIl-0St7FenuakKVVtM0eiUlbmyzpJ4EyGMFwPcF1lmxBxsd_MA.c8PJk5Gti_jf1qB0_67p4Q&nonce=DwPSv4eIG_B652Mc5PyGFReafQdMmUjvWlEFN5Y4ctA&scope=openid%20address%20email%20phone%20profile&vnd_pi_requested_resource=https%3A%2F%2Fscifinder-n.cas.org%2F&vnd_pi_application_name=SciFinder-nIDF"> SciFinder</a> and <a href="https://access.clarivate.com/login?app=wos&alternative=true&shibShireURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fauth%3DShibboleth&shibReturnURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fmode%3DNextgen%26action%3Dtransfer%26path%3D%252Fwos%252Fwoscc%252Fbasic-search%26DestApp%3DUA&referrer=mode%3DNextgen%26path%3D%252Fwos%252Fwoscc%252Fbasic-search%26DestApp%3DUA%26action%3Dtransfer&roaming=true">Web of Science</a></li>
                        <a href="https://www.expasy.org/"><li>Expasy</li></a>
                        <a href="https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb"><li>AlphaFold2</li></a>
                        <a href="https://metacyc.org/"><li>MetaCyc</li></a>
                        <a href="https://journals.iucr.org/b/services/authorservices.html"><li>IUCr (for Authors)</li></a>
                        <a href="https://jmol.sourceforge.net/jscolors/"><li>Ellipsoid Colors for Crystallography</li></a>
                        <a href="https://easyspin.org/easyspin/documentation/isotopetable.html"><li>Nuclear Isotope Database (EPR)</li></a>
                        <a href="https://organicchemistrydata.org/"><li>Organic Chemistry Data</li></a>
                        <a href="https://pubs.acs.org/doi/10.1021/om100106e"><li>Chemical Shifts of Trace Impurities (NMR)</li></a>
                       <li>Safety Videos – UCLA</li>
                        <a href="https://safetynet.web.unc.edu/"><li>The Safety Net</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resource;