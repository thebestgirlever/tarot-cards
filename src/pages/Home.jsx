import React, { useState } from 'react';
import SpreadSelector from '../components/SpreadSelector';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [selectedSpread, setSelectedSpread] = useState(null);
    const history = useHistory();

    const handleSelectSpread = (spread) => {
        setSelectedSpread(spread);
        history.push(`/spread/${spread}`);
    };

    return (
        <div>
            <h1>Добро пожаловать в Мистический онлайн-оракул</h1>
            <SpreadSelector onSelectSpread={handleSelectSpread} />
        </div>
    );
};

export default Home;
