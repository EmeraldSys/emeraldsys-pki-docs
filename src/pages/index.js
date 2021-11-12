import * as React from "react"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
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
                <p className="spacing" />
                <div className="docsIntro">
                    <p className="contentLight">This documentation covers about every aspect of the EmeraldSys PKI. If you find something not documented, it is probably still in testing.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default DocsPage