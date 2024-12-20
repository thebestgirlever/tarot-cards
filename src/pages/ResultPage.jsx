import React, { useEffect, useState } from "react";
import styles from './ResultPage.module.css';

function ResultPage() {
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        const storedCards = localStorage.getItem("selectedCards");
        if (storedCards) {
            setSelectedCards(JSON.parse(storedCards));
        }
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ваши выбранные карты</h1>
            <div className={styles.cards}>
                {selectedCards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <img 
                            src={`${process.env.PUBLIC_URL}/images/${card.image}`} 
                            alt={card.label} 
                            className={styles.cardImage} 
                        />
                        <p>{card.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResultPage;
