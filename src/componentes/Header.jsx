import React from "react";

export function Header({verContacto}) {
    return (

        //estructura de la barra de menu.
        <ul className="menu">

            <li className="homeIcon-items-menu" ><a href=""><img  src="./iconos/home.svg" alt="" className="iconoHome"/></a></li> 


            <li className="items-menu" ><a href="">PROYECTOS</a></li>   
            <li className="items-menu" ><a href="">FORMACIÓN</a></li>

            <div className="social">
                <li className="items-menu" ><a href="">NEWSLETTER</a></li>
                {verContacto && <li className="items-menu" id="contact"><a href="" className="contactBoton">CONTACTO</a></li> }
                    
            </div>

        </ul>
    );
}