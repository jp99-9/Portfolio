import { Header } from "../componentes/Header";
import { Link } from "react-router-dom";

export function Inicio() {
    return (
        <>
            <Header verContacto={true} verNewsLetter={true} />

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
                            <Link to="/Contact" className="botonInicio" type="button">Conóceme</Link>
                        </div>

                        <div className="iconos">
                            <ul className="redesSociales">
                                <li ><a target="_blank" href="https://es-es.facebook.com/"><img src="./iconos/facebook-brands-solid.svg" alt="" className="icon" /></a></li>
                                <li><a target="_blank" href="https://github.com/jp99-9"><img src="./iconos/github-brands-solid.svg" alt="" className="icon" /></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/"><img src="./iconos/instagram-brands-solid.svg" alt="" className="icon" /></a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/"><img src="./iconos/linkedin-in-brands-solid.svg" alt="" className="icon" /></a></li>
                            </ul>
                        </div>

                    </div>



                </div>
            </section>

        </>


    );
}