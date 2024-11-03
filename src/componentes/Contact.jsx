import { Header } from "../componentes/Header";

export function Contact() {
    return (

        <>
            <Header verContacto={false} />


            <div className="contacto">

                <h1>Contacto</h1>

                <form action="" className="formulario">
                    <label for="nombre"></label><br />
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre" /><br />
                    <label for="mail"></label><br />
                    <input type="email" id="mail" name="mail" placeholder="Mail"/><br />
                    
                    <br/><textarea name="mensaje" id="text" placeholder="Mensaje" rows="10" cols="30">

                    </textarea>

                    <input id="enviar" type="submit" value="Enviar"></input>
                </form>

            </div>

        </>

    );
}