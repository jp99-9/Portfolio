import React from "react";
import { Link } from "react-router-dom";

export function Header({ verContacto, verNewsLetter }) {
    return (

        //estructura de la barra de menu.
        <header className='barra'>
            <ul className="menu">

                <li className="homeIcon-items-menu" ><Link to="/"><img src="./iconos/home.svg" alt="" className="iconoHome" /></Link></li>


                <li className="items-menu" ><Link to="/Project">PROYECTOS</Link></li>
                

                <div className="social">
                    {verNewsLetter &&<li className="items-menu" ><a href="/Newsletter">NEWSLETTER</a></li>}
                    {verContacto && <li className="items-menu" id="contact"><Link to="/Contact" className="contactBoton">CONTACTO</Link></li>}

                </div>

            </ul>
        </header>
    );
}