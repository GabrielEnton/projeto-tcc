import React from "react";
import logo from "../img/Logo_site.png"


export default function Header() {
    return (
        <>
            <header className="topo">
                <img className="logo" src={logo} alt="Logo" />
                <div className="bunttons">
                    <button className="bunttons__img">IMAGEM</button>
                    <button className="bunttons__cod">CÓDIGO</button>
                    <button className="bunttons__text">TEXTO</button>
                </div>
            </header>
        </>
    );
}