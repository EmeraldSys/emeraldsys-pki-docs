import * as React from "react"
import "./styles/Sidebar.css"

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebarMain">
                <ul className="sidebarContents">
                    <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
                    <li><a href="/x509v3" style={{ color: "#fff", textDecoration: "none" }}>X509v3 API</a></li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar