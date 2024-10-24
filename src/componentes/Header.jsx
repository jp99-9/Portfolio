export function Header() {
    return (

        //estructura de la barra de menu.
        <ul className="menu">

            <li className="homeIcon-items-menu" ><a href="">Inicio</a></li> {/*icono de inicio */}


            <li className="items-menu" ><a href="">Portfolio</a></li>   {/*Elementos centrales de el menu */}
            <li className="items-menu" ><a href="">Formación</a></li>

            <div className="social">
                <li className="items-menu" ><a href="">Newsletter</a></li>
                <li className="items-menu" ><a href="">Contact</a></li>     {/*Elementos del lateral derecho del menu */}
            </div>

        </ul>
    );
}