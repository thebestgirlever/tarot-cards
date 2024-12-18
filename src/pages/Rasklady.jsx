import { useState } from 'react';
import styles from './Rasklady.module.css';
import CardRaskad from "../components/CardRaskad";
import data from '../data/options.json';

function Rasklady() {
    const [dataList] = useState(() => data.options);
    return (
        <div className={styles.block}>
            <h1 className={styles.title}>Выбери свой расклад</h1>
            <div className={styles.main}>
                {dataList.map((item) => (
                    <CardRaskad key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Rasklady;
