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
        scrollTop > 0 ? header.classList.add("sticky") : header.classList.remove("sticky");
    };

    return (
        <header className="mainHeader">
            <div className="alignHeader">
                <img src="https://edge.cdn.emeraldsys.xyz/internal/assets/emeraldsys_new_nobg.png" alt="Logo" style={{ height: "64px", marginTop: "5px", marginLeft: "5px" }} />
            </div>
        </header>
    );
};

export default Header