import * as React from "react"
import "../styles/index.css"
import Header from "../components/Header.js"
import Sidebar from "../components/Sidebar.js"
import Footer from "../components/Footer.js"

const FAQPage = () => {
    return (
        <main>
            <Header />
            <Sidebar />
            <div className="docsContent">
                <span className="titleBold">FAQ</span>
            </div>
            <Footer />
        </main>
    );
};

export default FAQPage