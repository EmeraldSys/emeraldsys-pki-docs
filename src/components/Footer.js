import * as React from "react"
import "./styles/Footer.css"

const Footer = () => {
    return (
        <div className="mainFooter">
            <p>Copyright (c) {new Date().getFullYear()} EmeraldSys</p>
        </div>
    );
};

export default Footer