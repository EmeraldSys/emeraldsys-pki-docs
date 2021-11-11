import * as React from "react"
import "../styles/index.css"
import { Helmet } from "react-helmet"

const X509V3Page = () => {
    return (
        <body>
            <Helmet>
                <title>EmeraldSys PKI Docs | X509v3</title>
            </Helmet>
            <div className="content">
                <header className="mainHeader">
                    <div className="alignHeader">
                        <img src="https://emeraldsys.github.io/images/company2_banner_white.png" alt="Logo" style={{ height: "45px", marginTop: "15px" }} />
                    </div>
                </header>
                <div className="docsContent">
                    <span className="titleBold">X509v3 API</span>
                </div>
            </div>
        </body>
    );
};

export default X509V3Page