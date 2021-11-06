import React from 'react';
// @ts-ignore
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav style={{outline:'1px solid red'}} className={styles.sideBar}>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Dialogs</a></li>
                <li><a href="#">Users</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;