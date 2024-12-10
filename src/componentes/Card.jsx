import React, { useState } from 'react';


export function Card({ id, author, title, description, urlToImage }) {


    const [informacion, setInfo] = useState(false);

    function toggleInfo() {


        setInfo(!informacion);


    }

    return (
        <article className="card">
            <div className="img-container">
                <img src={urlToImage} alt="" />

            </div>
            <div className="card-info">
                <h4>{title}</h4>
                <h5>{author}</h5>
                <p>
                    {informacion ? description : description.substring(0, 50) + "..."}
                    <button onClick={toggleInfo} className="on" >
                        {informacion ? "show less" : "read more"}
                    </button>
                </p>
                

            </div>
        </article >
    );
};


