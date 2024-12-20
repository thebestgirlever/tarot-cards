import React, { useState, useEffect } from "react";
import Select from "react-select";
import dataCard from "../data/tarotData.json";
import styles from './Rasklad.module.css';

function Rasklad({ onCardSelect, selectedCard }) {
    const cardShirt = '0.png';

    const options = dataCard.cards.map((card) => ({
        value: card.id,
        label: card.name,
        image: `${process.env.PUBLIC_URL}/images/${card.image}` 
    }));

    const [currentSelectedCard, setCurrentSelectedCard] = useState(selectedCard);

    useEffect(() => {
        setCurrentSelectedCard(selectedCard);
    }, [selectedCard]);

    const handleSelect = (selectedOption) => {
        setCurrentSelectedCard(selectedOption);
        onCardSelect(selectedOption); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img
                    src={currentSelectedCard ? currentSelectedCard.image : `${process.env.PUBLIC_URL}/images/${cardShirt}`}
                    alt={currentSelectedCard ? currentSelectedCard.label : "Рубашка карты"}
                    className={styles.cardImage}
                />
            </div>
            <div className={styles.dropdown}>
                <Select
                    options={options}
                    placeholder="Ваша карта..."
                    noOptionsMessage={() => "Карта не найдена"}
                    onChange={handleSelect}
                    value={currentSelectedCard}
                    isSearchable
                />
            </div>
        </div>
    );
}

export default Rasklad;
