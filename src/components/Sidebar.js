import * as React from "react"
import "./styles/Sidebar.css"

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebarMain">
                <ul className="sidebarContents">
                    <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
                    <li><a href="/x509v3" style={{ color: "#fff", textDecoration: "none" }}>X509v3 API</a></li>
                    <li><a href="/ocsp" style={{ color: "#fff", textDecoration: "none" }}>OCSP API</a></li>
                    <li><a href="/timestamp" style={{ color: "#fff", textDecoration: "none" }}>Timestamp API</a></li>
                    <li><a href="/certs" style={{ color: "#fff", textDecoration: "none" }}>Certificates</a></li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar
