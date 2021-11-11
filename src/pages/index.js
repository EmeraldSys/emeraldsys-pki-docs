import * as React from "react"
import Header from "../components/Header.js"
import "../styles/index.css"
import { Helmet } from "react-helmet"

const DocsPage = () => {
    return (
        <main>
            <Helmet>
                <title>EmeraldSys PKI Docs | Home</title>
            </Helmet>
            <Header />
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
                    <br />
                    <a href="/faq" style={{ color: "#fff", textDecoration: "none" }}>FAQ</a>
                </div>
            </div>
        </main>
    );
};

export default DocsPage