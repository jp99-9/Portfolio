import { CardList } from '../componentes/CardList';
import { useState, useEffect } from 'react';
import { Header } from '../componentes/Header';


export function Newsletter() {

    const [newsLetter, setNewsLetter] = useState([]);
    const [cards, setCard] = useState(8);



    const apikey = '5de2a90626ea42fa907b8d3c31615431';

    useEffect(() => {

        try {
            const fetchData = async () => {
                const response = await fetch(`https://newsapi.org/v2/everything?q=tecnologia&apiKey=${apikey}`);
                const data = await response.json();
                setNewsLetter(data.articles.slice(0, cards));
            }
            fetchData();
        }
        catch (error) {
            console.log(error);
        }
    }, [cards]);


    const handleClick = () => {
        setCard(cards + 4);
    }



    return (
        <div>
            <Header verContacto={true} verNewsLetter={false} />
            {<CardList news={newsLetter} handleClick={handleClick} />}
        </div>
    )
}