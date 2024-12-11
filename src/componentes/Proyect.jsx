
export function Proyect({ id, nombre, descripcion, tecnologia, imagen }) {
    return (
        <div className="proyecto">
            <h2>{nombre}</h2>
            <a target="_blank" href="https://github.com/jp99-9"> <img src={imagen} alt={nombre} /></a>
            <p className="descripcion">{descripcion}</p>
            <p className="tecnologia">{tecnologia}</p>
        </div>
    );
}