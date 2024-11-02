import { Header } from "./Header";
import { Link } from "react-router-dom";

export function Inicio() {
    return (
        <>
            <Header verContacto={true} />

            <section className='inicio'>
                <div className="perfil">
                    <div className="containerPerfil">
                        <img className="imgPerfil" src='../imgs/plantaPerfil.jpg' alt="perfil"></img>

                    </div>
                    <div className="aboutme">
                        <h1>Juan Pablo Aristizábal Uchima</h1>
                        <h2>Desarrollador Web</h2>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi illum facere sint modi, enim accusamus nemo dolorem ducimus error sunt non? Corrupti libero aut praesentium!
                        </p>

                        <div className="botonKM">
                            <button className="botonInicio" type="button"><Link to="/Contact">Conóceme</Link></button>
                        </div>

                        <div className="iconos">
                            <ul className="redesSociales">
                                <li ><a href=""><img src="./iconos/facebook-brands-solid.svg" alt="" className="icon" /></a></li>
                                <li><a href=""><img src="./iconos/github-brands-solid.svg" alt="" className="icon" /></a></li>
                                <li><a href=""><img src="./iconos/instagram-brands-solid.svg" alt="" className="icon" /></a></li>
                                <li><a href=""><img src="./iconos/linkedin-in-brands-solid.svg" alt="" className="icon" /></a></li>
                            </ul>
                        </div>

                    </div>



                </div>
            </section>

        </>


    );
}