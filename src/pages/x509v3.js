import * as React from "react"
import Header from "../components/Header.js"
import "../styles/index.css"
import { Helmet } from "react-helmet"

const X509V3Page = () => {
    return (
        <main>
            <Helmet>
                <title>EmeraldSys PKI Docs | X509v3</title>
            </Helmet>
            <Header />
            <div className="docsContent">
                <span className="titleBold">X509v3 API</span>
            </div>
        </main>
    );
};

export default X509V3Page