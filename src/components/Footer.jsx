import React from "react";
import logo from "../img/Logo_site.png"


export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-top">

                    <div>
                        <section>
                            <img className="logo" src={logo} alt="Logo" />
                        </section>
                    </div>
                    <div>
                        <section>
                            <h2>Alunos</h2>
                            <div>
                                <ul>
                                    <li>Gabriel Barbosa Freitas</li>
                                    <li>Willian Lovato Mendes</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section>
                            <h2>Orientador</h2>
                            <div>
                            <ul>
                                <li>Manuel Fernandez Paradela Ledon</li>
                            </ul>
                                
                            </div>
                        </section>
                    </div>
                    
                </div>
                <div className="footer-bottom">
                    <p>Copyright 2023 | Todos os direitos Reservados a Front.IA.</p>
                </div>
            </footer>
        </>
    );
}