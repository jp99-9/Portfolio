import React, { useEffect, useState } from 'react';
import { Proyect } from '../componentes/Proyect';
import '../css/proyectos.css';
import { Header } from '../componentes/Header';

export function Project() {

    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        try {
            fetch('/data/proyectos.json')
                .then(response => response.json())
                .then(data => setProyectos(data));
        } catch (error) {
            console.error(error);
        }
    }
        , []);







    return (
        <div>

            <Header verContacto={true} verNewsLetter={true} />
            <h1>Proyectos</h1>
            <div className="proyectos">
                {proyectos.map(proyecto => (
                    <Proyect key={proyecto.id}
                        {...proyecto}
                    />


                ))}
            </div>

        </div>
    )
}