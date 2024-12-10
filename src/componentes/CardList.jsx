import React from 'react';
import { Card } from './Card';
import '../css/cardList.css';

export function CardList({ news, handleClick }) {

    
    return (
        //estructura de la seccion de noticias.
        <>
            <h2 className='titulo'>Newsletter</h2>
            <section className="cards">
                {news.map((article) => (
                    <Card
                        key={article.url}
                        author={article.author}
                        title={article.title}
                        description={article.description}

                        urlToImage={article.urlToImage}
                    />
                ))}
            </section>

            <button onClick={handleClick} className='boton'>Cargar más</button>
        </>

    );
}