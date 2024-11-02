import { Header } from "../componentes/Header";

export function Contact() {
    return (

        <>
            <Header verContacto={false} />
            <h1>Contacto</h1>

            <form action="">
                <label for="nombre">Nombre</label><br />
                <input type="text" id="nombre" name="nombre" /><br />
                <label for="mail">Email</label><br />
                <input type="email" id="mail" name="mail" /><br />
                <p>Mensaje</p>
                <textarea name="mensaje" rows="10" cols="30">
                    
                </textarea>

                <input type="submit" value="Enviar"></input>
            </form>
        </>

    );
}