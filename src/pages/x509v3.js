import * as React from "react"
import Header from "../components/Header.js"
import Sidebar from "../components/Sidebar.js"
import Footer from "../components/Footer.js"
import "../styles/index.css"
import { Helmet } from "react-helmet"

const X509V3Page = () => {
    return (
        <main>
            <Helmet>
                <title>EmeraldSys PKI Docs | X509v3</title>
            </Helmet>
            <Header />
            <Sidebar />
            <div className="docsContent">
                <span className="titleBold">X509v3 API</span>
                <p className="spacing" />
                <p className="contentLight">This section of the documentation covers the X509v3 API.</p>
                <p className="contentCode">https://api.pki.emeraldsys.xyz/v1/certs</p>
                <div id="generateCsr" style={{ display: "block", marginTop: "75px" }}>
                    <span className="subtitleBold">Generating a CSR</span>
                    <p className="spacing" />
                    <p className="contentCode">POST /csr</p>
                    <p className="spacing" />
                    <p className="contentLight">This endpoint allows you to generate a CSR for use with any certificate authority.</p>
                    <p className="spacing" />
                    <div className="generateCsrParams">
                        <p className="sectionSubtitleExtraBold">JSON Request Body</p>
                        <p className="contentCode">
                            * &lt;string&gt; commonName
                            <br />
                            The common name in the CSR
                            <br />
                            ------------------------------------------------
                            <br />
                            &lt;string&gt; organization
                            <br />
                            The organization in the CSR
                            <br />
                            ------------------------------------------------
                            <br />
                            &lt;string&gt; locality
                            <br />
                            The locality/city of the organization in the CSR
                            <br />
                            ------------------------------------------------
                            <br />
                            &lt;string&gt; state
                            <br />
                            The state/province of the organization in the CSR
                            <br />
                            ------------------------------------------------
                            <br />
                            &lt;string&gt; country
                            <br />
                            The country of the organization in the CSR
                        </p>
                    </div>
                    <p className="spacing" />
                    <div className="generateCsrResp">
                        <p className="sectionSubtitleExtraBold">Responses</p>
                        <p className="contentCode">
                            Success - 201 Created
                            <br />
                            &#123;"success": true, "info": &#123;"csr": &lt;CSR&gt;, "privkey": &lt;CSR Private Key&gt;&#125;&#125;
                            <br />
                            <br />
                            Failure - 400 Bad Request - commonName missing
                        </p>
                    </div>
                </div>
                <div id="requestCert" style={{ display: "block", marginTop: "75px" }}>
                    <span className="subtitleBold">Requesting a Certificate</span>
                    <p className="spacing" />
                    <p className="contentCode">POST /request</p>
                    <p className="spacing" />
                    <p className="contentLight">This endpoint allows you to request a certificate for your use case. Please note: only domain validation certificates can be requested at this time.</p>
                    <p className="spacing" />
                    <div className="requestCertParams">
                        <p className="sectionSubtitleExtraBold">JSON Request Body</p>
                        <p className="contentCode">
                            * &lt;string&gt; csr
                            <br />
                            The certificate signing request that you have generated yourself or through the CSR endpoint
                        </p>
                    </div>
                    <p className="spacing" />
                    <div className="requestCertResp">
                        <p className="sectionSubtitleExtraBold">Responses</p>
                        <p className="contentCode">
                            Success - 201 Created
                            <br />
                            &#123;"success": true, "message": "Certificate is now pending"&#125;
                            <br />
                            <br />
                            Failure - 400 Bad Request - CSR is invalid
                            <br />
                            &#123;"success": false, "message": "Invalid CSR - &lt;Details&gt;"&#125;
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default X509V3Page