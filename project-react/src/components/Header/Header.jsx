import React from "react"; // sada može i bez ovoga po najnovijoj sintaksi

import "./Header.css";

const Header = () => {//koristiom className jer je class rezervisana reč u JS
    return (
       
        <nav className="header">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">My React Blog</span>
            </div>
        </nav>
    );
};

export  {Header} ;