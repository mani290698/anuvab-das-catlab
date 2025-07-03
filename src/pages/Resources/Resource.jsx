import "../Research/Research.css";
import React, { useEffect, useState, useRef } from "react";

function Resource() {
    return (
        <div>
            <div className="publication-grid">
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
                    <u><h5>Graduate Fellowships</h5></u>

                    <ul style={{ textAlign: 'justify', paddingLeft: '20px' }}>
                        <li>Nanyang President's Graduate Scholarship (NGPS)</li>
                        <li>Provost Graduate Award (PGA)</li>
                        <li>NTU Research Scholarship</li>
                        <li>A*STAR Graduate Scholarship (AGS)</li>
                        <li>Singapore International Graduate Award (SINGA)</li>
                    </ul>
                    <u><h5>Postdoc Fellowships</h5></u>

                    <ul style={{ textAlign: 'justify', paddingLeft: '20px' }}>
                        <li>NTU Presidential Postdoctoral Fellowship (NTU PPF)</li>
                        <li>Lee Kuan Yew Postdoctoral Fellowship (LKYPDF)</li>
                    </ul>
                    <u><h5>Chemistry Links & Databases</h5></u>

                    <ul style={{ textAlign: 'justify', paddingLeft: '20px' }}>
                        <li>Reaxys, SciFinder and Web of Science</li>
                        <li>Expasy</li>
                        <li>AlphaFold2</li>
                        <li>Expasy</li>
                        <li>MetaCyc</li>
                        <li>IUCr (for Authors)</li>
                        <li>Ellipsoid Colors for Crystallography</li>
                        <li>Nuclear Isotope Database (EPR)</li>
                        <li>Organic Chemistry Data</li>
                        <li>Chemical Shifts of Trace Impurities (NMR)</li>
                        <li>Safety Videos – UCLA</li>
                        <li>The Safety Net</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resource;