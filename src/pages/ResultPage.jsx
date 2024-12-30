import React, { useEffect, useState } from "react";
import styles from './ResultPage.module.css';
import dataCard from '../data/tarotData.json';

function ResultPage() {
    const [selectedCards, setSelectedCards] = useState([]);
    const [selectedRasklad, setSelectedRasklad] = useState(null);

    useEffect(() => {
        const storedCards = localStorage.getItem("selectedCards");
        const storedRasklad = localStorage.getItem("selectedRasklad");
        if (storedCards) setSelectedCards(JSON.parse(storedCards));
        if (storedRasklad) setSelectedRasklad(JSON.parse(storedRasklad));
    }, []);

    const getCardDescription = (cardId) => {
        if (!selectedRasklad) return 'Расклад не выбран.';
        const cardData = dataCard.cards.find((card) => card.id === cardId);
        if (!cardData) return 'Карта не найдена.';
        const description = cardData[selectedRasklad.link];
        return description || 'Описание для этого расклада отсутствует.';
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ваши выбранные карты</h1>
            <div className={styles.cards}>
                {selectedCards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <img 
                            src={card.image} 
                            alt={card.label} 
                            className={styles.cardImage} 
                        />
                        <p className={styles.cardName}>{card.label}</p>
                        <p className={styles.description}>{getCardDescription(card.value)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResultPage;
