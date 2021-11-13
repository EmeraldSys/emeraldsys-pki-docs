import * as React from "react"
import { useEffect } from "react"
import "./styles/Header.css"

const Header = () => {
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector(".mainHeader");
        const scrollTop = window.scrollY;
        scrollTop >= 65 ? header.classList.add("sticky") : header.classList.remove("sticky");
    };

    return (
        <header className="mainHeader">
            <div className="alignHeader">
                <img src="https://emeraldsys.github.io/images/company2_banner_white.png" alt="Logo" style={{ height: "45px", marginTop: "15px" }} />
            </div>
        </header>
    );
};

export default Header