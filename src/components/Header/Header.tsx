import React from 'react';
// @ts-ignore
import styles from './Header.module.css';

const Header = () => {
    return (
        <header style={{outline:'1px solid red'}} className={styles.header}>
            Header
        </header>
    );
};

export default Header;