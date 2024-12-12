import React from 'react';

const CardInterpretation = ({ cards, tarotData }) => {
    const interpretCard = (cardName) => {
        const card = tarotData.find((c) => c.name === cardName);
        return card ? card.meanings.present : "Неизвестная карта";
    };

    return (
        <div>
            <h2>Трактовка карт</h2>
            <ul>
                {cards.map((card, index) => (
                    <li key={index}>
                        <strong>{card}</strong>: {interpretCard(card)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardInterpretation;
