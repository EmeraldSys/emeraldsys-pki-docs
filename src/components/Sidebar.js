import * as React from "react"
import "./styles/Sidebar.css"

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebarMain">
                <ul className="sidebarContents">
                    <li><a href="/" className="sidebarLink">Home</a></li>
                    <li><a href="/x509v3" className="sidebarLink">X509v3 API</a></li>
                    <li><a href="/ocsp" className="sidebarLink">OCSP API</a></li>
                    <li><a href="/timestamp" className="sidebarLink">Timestamp API</a></li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar
