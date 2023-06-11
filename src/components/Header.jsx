import React from "react";
import logo from "../img/logo.svg"


export default function Header () {
    return (
        <>
            <header className="topo">
                <img className="logo" src={logo} alt="Logo" />
            </header>
        </>
    );
}