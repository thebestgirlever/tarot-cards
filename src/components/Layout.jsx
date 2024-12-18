import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { ReactComponent as Telegram } from '../assets/svg/telegram.svg';

function Layout() {
    const [activeNav, setActiveNav] = useState(''); 
    const navigate = useNavigate(); 

    const handleNavClick = (nav) => {
        setActiveNav(nav); 
        navigate(nav); 
    };

    const handleHomeClick = (toHome) => {
        setActiveNav(''); 
        navigate(toHome);
    };

    return (
        <div className={styles.root}>
            <header>
                <div
                    className={styles.blockLogo}
                    onClick={() => handleHomeClick('/')} 
                >
                    <Logo />
                    <h1 className={styles.title}>Сам себе таролог</h1>
                </div>
                <ul className={styles.nav}>
                    <li
                        className={`${styles.navTitle} ${activeNav === '/rasklady' ? styles.activeNavTitle : ''}`}
                        onClick={() => handleNavClick('/rasklady')}
                    >
                        Раскады
                    </li>
                    <li
                        className={`${styles.navTitle} ${activeNav === '/informaciya=po=karte' ? styles.activeNavTitle : ''}`}
                        onClick={() => handleNavClick('/informaciya=po=karte')}
                    >
                        Карты и значения
                    </li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Telegram />
                <p className={styles.footerText}>По вопросам и предложениям</p>
            </footer>
        </div>
    );
}

export default Layout;
