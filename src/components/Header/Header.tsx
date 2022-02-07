import React from 'react';
// @ts-ignore
import styles from './Header.module.css';

const Header = () => {
    return (
        <header  className={styles.header}>
            <img src="https://l-stat.livejournal.net/img/reskining/2011/desert/horizon-bg.jpg" alt="" width={'100%'} height={'100%'}/>
        </header>
    );
};

export default Header;