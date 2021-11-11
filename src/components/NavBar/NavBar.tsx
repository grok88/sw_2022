import React from 'react';
import {NavLink} from 'react-router-dom';
// @ts-ignore
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav style={{outline: '1px solid red'}} className={styles.sideBar}>
            <ul>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;