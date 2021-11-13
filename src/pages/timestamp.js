import * as React from "react"
import "../styles/index.css"
import { Helmet } from "react-helmet"
import Header from "../components/Header.js"
import Sidebar from "../components/Sidebar.js"
import Footer from "../components/Footer.js"

const TimestampPage = () => {
    return (
        <main>
            <Helmet>
                <title>EmeraldSys PKI Docs | TSA</title>
            </Helmet>
            <Header />
            <Sidebar />
            <div className="docsContent">
                <span className="titleBold">Timestamp API</span>
                <p className="spacing" />
                <p className="contentLight">This section of the documentation covers the EmeraldSys Authenticode and <a href="https://www.ietf.org/rfc/rfc3161.txt" style={{ color: "#fff" }}>RFC3161</a> Timestamp API. This API is mainly used for timestamping documents.</p>
                <p className="contentCode">https://ts.pki.emeraldsys.xyz</p>
                <div id="timestampDocumentDefault" className="docsContentSection">
                    <span className="subtitleBold">Timestamping a Document (Auto)</span>
                    <p className="spacing" />
                    <p className="contentCode">POST /</p>
                    <p className="spacing" />
                    <p className="contentLight">This endpoint allows you to timestamp a document using the automatically selected algorithm, SHA256. <a href="https://docs.microsoft.com/en-us/windows/win32/seccrypto/signtool" style={{ color: "#fff" }}>SignTool</a> is recommended for timestamping.</p>
                    <p className="spacing" />
                    <div id="signtoolAuthenticodeDefault">
                        <span className="sectionSubtitleExtraBold">SignTool Authenticode Example</span>
                        <p className="spacing" />
                        <p className="contentCode">
                            signtool sign /t http://ts.pki.emeraldsys.xyz /f &lt;PFX Bundle&gt; /p &lt;Optional Password&gt; &lt;Document path&gt;
                        </p>
                    </div>
                    <p className="spacing" />
                    <div id="signtoolRfcDefault">
                        <span className="sectionSubtitleExtraBold">SignTool RFC3161 Example</span>
                        <p className="spacing" />
                        <p className="contentCode">
                            signtool sign /tr http://ts.pki.emeraldsys.xyz /td sha256 /fd sha256 /f &lt;PFX Bundle&gt; /p &lt;Optional Password&gt; &lt;Document path&gt;
                        </p>
                    </div>
                </div>
                <p className="spacing" />
                <div id="timestampDocumentSha384" className="docsContentSection">
                    <span className="subtitleBold">Timestamping a Document (SHA384)</span>
                    <p className="spacing" />
                    <p className="contentCode">POST /sha384</p>
                    <p className="spacing" />
                    <p className="contentLight">This endpoint allows you to timestamp a document using the selected algorithm, SHA384. <a href="https://docs.microsoft.com/en-us/windows/win32/seccrypto/signtool" style={{ color: "#fff" }}>SignTool</a> is recommended for timestamping.</p>
                    <p className="spacing" />
                    <div id="signtoolAuthenticodeSha384">
                        <span className="sectionSubtitleExtraBold">SignTool Authenticode Example</span>
                        <p className="spacing" />
                        <p className="contentCode">
                            signtool sign /t http://ts.pki.emeraldsys.xyz/sha384 /f &lt;PFX Bundle&gt; /p &lt;Optional Password&gt; &lt;Document path&gt;
                        </p>
                    </div>
                    <p className="spacing" />
                    <div id="signtoolRfcSha384">
                        <span className="sectionSubtitleExtraBold">SignTool RFC3161 Example</span>
                        <p className="spacing" />
                        <p className="contentCode">
                            signtool sign /tr http://ts.pki.emeraldsys.xyz/sha384 /td sha384 /fd sha384 /f &lt;PFX Bundle&gt; /p &lt;Optional Password&gt; &lt;Document path&gt;
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default TimestampPage