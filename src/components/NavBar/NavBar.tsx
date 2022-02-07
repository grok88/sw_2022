import React from 'react';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';
// @ts-ignore
import styles from './NavBar.module.css';


export  type NavBarPropsType = {}

const NavBar: React.FC<NavBarPropsType> = () => {

    return <>
        <div className={styles.sideBar} >
            <nav >
                <ul className={styles.mainNav + ' ' + styles.navContainer}>
                    <li ><NavLink to='/profile' className={styles.text}>Profile</NavLink></li>
                    <li><NavLink to='/dialogs' className={styles.text}>Dialogs</NavLink></li>
                    <li><NavLink to='/settings' className={styles.text}>Settings</NavLink></li>
                    <li><NavLink to='/select' className={styles.text}>Custom Select</NavLink></li>
                    <li><NavLink to='/useReducer' className={styles.text}>useReducer</NavLink></li>
                    <li><NavLink to='/users' className={styles.text}>Users</NavLink></li>
                </ul>
            </nav>
            <Friends/>
        </div>
    </>
}

export default NavBar;