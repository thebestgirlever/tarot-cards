import React from 'react';

const SpreadSelector = ({ onSelectSpread }) => {
    const spreads = ["Выбор из двух", "Прошлое-Настоящее-Будущее", "Работа-Любовь-Финансы"];

    return (
        <div>
            <h2>Выберите расклад</h2>
            <ul>
                {spreads.map((spread, index) => (
                    <li key={index} onClick={() => onSelectSpread(spread)}>
                        {spread}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpreadSelector;
