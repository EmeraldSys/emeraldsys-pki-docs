import * as React from "react"
import Header from "../components/Header.js"
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
            <div className="docsContent">
                <span className="titleBold">X509v3 API</span>
                <p className="spacing" />
                <p className="contentLight">This section of the documentation covers the X509v3 API.</p>
            </div>
            <Footer />
        </main>
    );
};

export default X509V3Page