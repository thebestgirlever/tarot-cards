import React, { useState } from "react";
import Select from "react-select";
import dataCard from "../data/tarotData.json";
import styles from './Rasklad.module.css';

function Rasklad() {
    const cardShirt = '0.png';

    const options = dataCard.cards.map((card) => ({
        value: card.id,
        label: card.name,
        image: `${process.env.PUBLIC_URL}/images/${card.image}` 
    }));

    const [selectedCard, setSelectedCard] = useState(null);

    const handleSelect = (selectedOption) => {
        setSelectedCard(selectedOption);
        console.log("Выбранная карта:", selectedOption);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img
                    src={selectedCard ? selectedCard.image : `${process.env.PUBLIC_URL}/images/${cardShirt}`}
                    alt={selectedCard ? selectedCard.label : "Рубашка карты"}
                    className={styles.cardImage}
                />
            </div>
            <div className={styles.dropdown}>
                <Select
                    options={options}
                    placeholder="Ваша карта..."
                    noOptionsMessage={() => "Карта не найдена"}
                    onChange={handleSelect}
                    value={selectedCard}
                    isSearchable
                />
            </div>
        </div>
    );
}

export default Rasklad;
