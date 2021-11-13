import * as React from "react"
import "../styles/index.css"
import { Helmet } from "react-helmet"
import Header from "../components/Header.js"
import Sidebar from "../components/Sidebar.js"
import Footer from "../components/Footer.js"

const OCSPPage = () => {
    return (
        <main>
            <Helmet>
                <title>EmeraldSys PKI Docs | OCSP</title>
            </Helmet>
            <Header />
            <Sidebar />
            <div className="docsContent">
                <span className="titleBold">OCSP API</span>
                <p className="spacing" />
                <p className="contentLight">This section of the documentation covers the OCSP (Online Certificate Status Protocol) API.</p>
                <p className="contentCode">https://ocsp.pki.emeraldsys.xyz</p>
                <p className="contentLight">You can download EmeraldSys intermediate certificates <a href="https://crt.pki.emeraldsys.xyz" style={{ color: "#fff" }}>here</a>.</p>
                <div id="fetchCertStatusAuto" className="docsContentSection">
                    <span className="subtitleBold">Fetching a Certificate's Status (Auto)</span>
                    <p className="spacing" />
                    <p className="contentCode">POST /</p>
                    <p className="spacing" />
                    <p className="contentLight">This endpoint allows you to fetch a certificate's status from the OCSP API, automatically setting the certificate to sign the response with. Content-Type header must be set to application/ocsp-request and the request body must be a valid binary encoded OCSP request.</p>
                    <p className="spacing" />
                    <div id="openSslExampleAuto">
                        <span className="sectionSubtitleExtraBold">OpenSSL Example</span>
                        <p className="spacing" />
                        <p className="contentCode">openssl ocsp -issuer "&lt;Intermediate issuer path&gt;" -cert "&lt;Certificate path&gt;" -text -url http://ocsp.pki.emeraldsys.xyz</p>
                    </div>
                </div>
                <p className="spacing" />
                <div id="fetchCertStatusManual" className="docsContentSection">
                    <span className="subtitleBold">Fetching a Certificate's Status (Manual)</span>
                    <p className="spacing" />
                    <p className="contentCode">
                        POST /trustedid_code2022
                        <br />
                        POST /trustedid_ov2022
                        <br />
                        POST /trustedid_ts2022
                    </p>
                    <p className="spacing" />
                    <p className="contentLight">This endpoint allows you to fetch a certificate's status from the OCSP API, manually setting the certificate to sign the response with. Content-Type header must be set to application/ocsp-request and the request body must be a valid binary encoded OCSP request.</p>
                    <p className="spacing" />
                    <div id="openSslExampleManual">
                        <span className="sectionSubtitleExtraBold">OpenSSL Example</span>
                        <p className="spacing" />
                        <p className="contentCode">
                            openssl ocsp -issuer "&lt;Intermediate issuer path&gt;" -cert "&lt;Certificate path&gt;" -text -url http://ocsp.pki.emeraldsys.xyz/trustedid_code2022
                            <br />
                            openssl ocsp -issuer "&lt;Intermediate issuer path&gt;" -cert "&lt;Certificate path&gt;" -text -url http://ocsp.pki.emeraldsys.xyz/trustedid_ov2022
                            <br />
                            openssl ocsp -issuer "&lt;Intermediate issuer path&gt;" -cert "&lt;Certificate path&gt;" -text -url http://ocsp.pki.emeraldsys.xyz/trustedid_ts2022
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default OCSPPage