import styles from './CardRaskad.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Image } from '../assets/svg/12domov.svg';

function CardRaskad({ item }) {

    return (
        <Link to={`/raskald/${item.link}`}>
            <div className={styles.card}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.image}><Image /></div>
                <div className={styles.title}>{item.title}</div>
            </div>
        </Link>

    );
}

export default CardRaskad;
