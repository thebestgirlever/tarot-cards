import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/options.json";
import Rasklad from "../components/Rasklad";
import styles from './PageRasklad.module.css';

function PageRasklad() {
    const { link } = useParams();
    const [item, setItem] = useState(() =>
        data.options.find((item) => item.link === link)
    );

    useEffect(() => {
        setItem(data.options.find((item) => item.link === link));
    }, [link]);

    if (!item) {
        return <h1>Расклад не найден</h1>;
    }

    return (
        <div className={styles.block}>
            <h1 className={styles.name}>{item.name}</h1>
            <p className={styles.text}>{item.title}</p>
            <div className={styles.cardsContainer}>
                {Array.from({ length: item.cards }).map((_, index) => (
                    <Rasklad key={index} />
                ))}
            </div>

            <button>Узнать ответы</button>
            
        </div>
    );
}

export default PageRasklad;
