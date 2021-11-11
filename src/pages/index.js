import * as React from "react"
import "../styles/index.css"

const DocsPage = () => {
    return (
        <body>
            <div className="content">
                <header className="mainHeader">
                    <div className="alignHeader">
                        <img src="https://emeraldsys.github.io/images/company2_banner_white.png" alt="Logo" style={{ height: "45px", marginTop: "15px" }} />
                    </div>
                </header>
                <div className="docsContent">
                    <span className="titleBold">PKI Documentation</span>
                    <br />
                    <br />
                    <hr size="1" color="#171717" noshade />
                    <br />
                    <div className="docsIntro">
                        <p className="contentLight">This documentation covers about every aspect of the EmeraldSys PKI. If you find something not documented, it is probably still in testing.</p>
                        <br />
                        <a href="/x509v3" style={{ color: "#fff", textDecoration: "none" }}>X509v3 API</a>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default DocsPage