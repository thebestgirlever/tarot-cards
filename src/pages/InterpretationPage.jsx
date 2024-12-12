import React from 'react';
import CardInterpretation from '../components/CardInterpretation';
import { tarotData } from '../data/tarotData';

const InterpretationPage = ({ location }) => {
    const { cards } = location.state; // Используем переданные данные о картах

    return (
        <div>
            <h2>Трактовка расклада</h2>
            <CardInterpretation cards={cards} tarotData={tarotData} />
        </div>
    );
};

export default InterpretationPage;
