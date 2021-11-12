import * as React from "react"
import "./styles/Header.css"

const Header = () => {
    return (
        <header className="mainHeader">
            <div className="alignHeader">
                <img src="https://emeraldsys.github.io/images/company2_banner_white.png" alt="Logo" style={{ height: "45px", marginTop: "15px" }} />
            </div>
            <div className="sidebarMain">
                <ul className="sidebarContents">
                    <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
                    <li><a href="/x509v3" style={{ color: "#fff", textDecoration: "none" }}>X509v3 API</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header