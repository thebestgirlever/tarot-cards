import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.container}>
            <section className={styles.heroSection}>
                <h1 className={styles.mainHeading}>Устали платить деньги обманщикам?</h1>
                <p className={styles.subHeading}>Сделайте расклад самостоятельно!</p>
                <Link to="/rasklady" className={styles.ctaButton}>Начать гадание</Link>
            </section>

            <section className={styles.infoSection}>
                <div className={styles.infoBlock}>
                    <p className={styles.infoText}>Для этого вам понадобятся карты Таро. <br />
                        Если их нет, Бог Рандома поможет! </p>
                    <p className={styles.infoText}>Чтобы узнать ответы необходимо:</p>
                    <ol>
                        <li className={styles.infoText}>Сосредоточиться</li>
                        <li className={styles.infoText}>Задать вопрос</li>
                        <li className={styles.infoText}>Верить в первую попытку.
                            <br />
                            <i>Она всегда самая точная.</i>
                        </li>
                    </ol>
                </div>
                <img
                    src={`${process.env.PUBLIC_URL}/images/homeCardsInfo.png`}
                    alt="Карты Таро"
                    className={styles.infoImage}
                />
            </section>

            <section className={styles.spreadSection}>
                <h2 className={styles.sectionHeading}>Выбирайте расклад на ваш вкус</h2>
                <div className={styles.spreads}>
                    <div className={styles.spreadCard}>
                        <h3>Трехкарточный</h3>
                        <p>Простой и быстрый расклад.</p>
                    </div>
                    <div className={styles.spreadCard}>
                        <h3>Кельтский Крест</h3>
                        <p>Глубокий анализ ситуации.</p>
                    </div>
                    <div className={styles.spreadCard}>
                        <h3>Пять карт</h3>
                        <p>Отвечает на сложные вопросы.</p>
                    </div>
                </div>
                <Link to="/rasklady" className={styles.ctaButtonGrey}>Выбрать расклад</Link>
            </section>

            <section className={styles.interpretationSection}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/CardInterp.png`}
                    alt="Карты Таро"
                    className={styles.interpretationImage}
                />
                <div className={styles.interpretationBlock}>
                    <h2 className={styles.sectionHeading}>Не подходит интерпретация?</h2>
                    <p className={styles.infoText}>Изучите описание карты и вычлените для себя <br/> <b>самое главное</b></p>
                    <Link to="/informaciya=po=karte" className={styles.ctaButton}>Значения карт</Link>
                </div>
            </section>


            <section className={styles.finalSection}>
                <h2 className={styles.sectionHeading}>Готовы узнать ответы на свои вопросы?</h2>
                <Link to="/rasklady" className={styles.ctaButtonGrey}>Начать расклад</Link>
            </section>
        </div>
    );
}

export default Home;
