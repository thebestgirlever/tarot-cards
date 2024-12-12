import React, { useState } from 'react';

const CardInput = ({ onSubmit }) => {
    const [cards, setCards] = useState(Array(7).fill(''));

    const handleCardChange = (index, value) => {
        const newCards = [...cards];
        newCards[index] = value;
        setCards(newCards);
    };

    const handleSubmit = () => {
        onSubmit(cards);
    };

    return (
        <div>
            <h2>Введите значения карт</h2>
            <div>
                {cards.map((card, index) => (
                    <input
                        key={index}
                        type="text"
                        value={card}
                        onChange={(e) => handleCardChange(index, e.target.value)}
                        placeholder={`Карта ${index + 1}`}
                    />
                ))}
            </div>
            <button onClick={handleSubmit}>Получить трактовку</button>
        </div>
    );
};

export default CardInput;
