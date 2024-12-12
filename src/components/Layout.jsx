import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Мистический онлайн-оракул</h1>
                {/* Можно добавить навигацию */}
            </header>
            <main>
                {children} {/* Отображение содержимого страниц */}
            </main>
            <footer>
                <p>© 2024 Мистический онлайн-оракул</p>
            </footer>
        </div>
    );
};

export default Layout;
