import React, { useState } from 'react';
import CardInput from '../components/CardInput';
import { useHistory } from 'react-router-dom';

const SpreadPage = ({ match }) => {
    const spreadType = match.params.spreadType;
    const [cards, setCards] = useState([]);
    const history = useHistory();

    const handleSubmit = (cards) => {
        setCards(cards);
        history.push('/interpretation');
    };

    return (
        <div>
            <h2>Вы выбрали расклад: {spreadType}</h2>
            <CardInput onSubmit={handleSubmit} />
        </div>
    );
};

export default SpreadPage;
