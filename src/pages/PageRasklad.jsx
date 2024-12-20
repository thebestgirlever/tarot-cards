import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/options.json";
import dataCard from "../data/tarotData.json";
import Rasklad from "../components/Rasklad";
import styles from './PageRasklad.module.css';

function PageRasklad() {
    const { link } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        const currentItem = data.options.find((item) => item.link === link);
        if (currentItem) {
            setItem(currentItem);
            setSelectedCards(Array.from({ length: currentItem.cards }).fill(null)); 
        }
    }, [link]);

    const handleCardSelect = (index, selectedCard) => {
        setSelectedCards((prevCards) => {
            const updatedCards = [...prevCards];
            updatedCards[index] = selectedCard;
            return updatedCards;
        });
    };

    const handleRandomSelection = () => {
        if (item) {
            const randomCards = Array.from({ length: item.cards }).map(() => {
                const randomIndex = Math.floor(Math.random() * dataCard.cards.length);
                const randomCard = dataCard.cards[randomIndex];
                return {
                    value: randomCard.id,
                    label: randomCard.name,
                    image: `${process.env.PUBLIC_URL}/images/${randomCard.image}`,
                };
            });
            setSelectedCards(randomCards); 
        }
    };

    const handleResult = () => {
        localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
        navigate("/result"); 
    };

    if (!item) {
        return <h1>Расклад не найден</h1>;
    }

    return (
        <div className={styles.block}>
            <h1 className={styles.name}>{item.name}</h1>
            <p className={styles.text}>{item.title}</p>
            <div className={styles.cardsContainer}>
                {Array.from({ length: item.cards }).map((_, index) => (
                    <Rasklad
                        key={index}
                        onCardSelect={(selectedCard) => handleCardSelect(index, selectedCard)}
                        selectedCard={selectedCards[index]}
                    />
                ))}
            </div>
            <div className={styles.buttons}>
                <button onClick={handleRandomSelection}>Случайный выбор</button>
                <button onClick={handleResult}>Узнать ответы</button>
            </div>
        </div>
    );
}

export default PageRasklad;
