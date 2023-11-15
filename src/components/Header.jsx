import React from "react";
import { Link } from "react-router-dom"
import logo from "../img/Logo_site.png"


export default function Header() {
    return (
        <>
            <header className="topo">
                <img className="logo" src={logo} alt="Logo" />
                <nav className="bunttons">
                    <Link to="/imagem"><button className="bunttons__img">IMAGEM</button></Link>
                    <Link><button className="bunttons__cod">CÓDIGO</button></Link>
                    <Link><button className="bunttons__text">TEXTO</button></Link>
                    
                </nav>
            </header>
        </>
    );
}