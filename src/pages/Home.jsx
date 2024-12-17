import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from "../data/options.json";

function Home() {
    const navigate = useNavigate();

    const handleSelectOption = (option) => {
        navigate('/spreadPage', { state: { selectedOption: option } });
    };

    return (
        <div>
            <h1>Добро пожаловать в Мистический онлайн-оракул</h1>
            <div>выберите расклад</div>
            {data.options.map((item) => (
                <div key={item.id}>
                    <div>{item.name}</div>
                    <button onClick={() => handleSelectOption(item)}>Выбрать</button>
                </div>
            ))}
        </div>
    );
}

export default Home;
