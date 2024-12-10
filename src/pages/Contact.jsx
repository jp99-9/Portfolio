import { useState } from 'react';
import { Header } from "../componentes/Header";

export function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        mail: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Header verContacto={false} verNewsLetter={true}/>
            <div className="contacto">
                <h1>Contacto</h1>
                <form onSubmit={handleSubmit} className="formulario">
                    <label htmlFor="nombre">Nombre</label><br />
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    /><br />

                    <label htmlFor="apellido">Apellido</label><br />
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    /><br />
                    <label htmlFor="mail">Mail</label><br />
                    <input
                        type="email"
                        id="mail"
                        name="mail"
                        placeholder="Mail"
                        value={formData.mail}
                        onChange={handleChange}
                    /><br />
                    <label htmlFor="mensaje">Mensaje</label><br />
                    <textarea
                        name="mensaje"
                        id="mensaje"
                        placeholder="Mensaje"
                        rows="10"
                        cols="30"
                        value={formData.mensaje}
                        onChange={handleChange}
                    ></textarea><br />
                    <input id="enviar" type="submit" value="Enviar" />
                </form>
            </div>
        </>
    );
}