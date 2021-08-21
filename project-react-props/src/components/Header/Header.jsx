import React from "react"; // sada može i bez ovoga po najnovijoj sintaksi

import "./Header.css";

const Header = ({ name, onUserSwitch }) => {//koristiom className jer je class rezervisana reč u JS
    console.log("name: ", name);
    return (
       
        <nav className="header">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">My React Blog</span>
                <p>{name}</p>
                <button onClick = {onUserSwitch}>Switch User</button>
            </div>
        </nav>
    );
};

export  {Header} ;