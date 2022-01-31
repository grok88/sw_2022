import React from 'react';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';
// @ts-ignore
import styles from './NavBar.module.css';
import {store} from '../../redux/store';


export  type NavBarPropsType = {}
const NavBar: React.FC<NavBarPropsType> = () => {
        const {friends} = store.getState().friendsReducer;
        // const {friends} = friendsPage;

        return <>
            <div className={styles.sideBar} style={{outline: '1px solid red'}}>
                <nav>
                    <ul>
                        <li><NavLink to='/profile'>Profile</NavLink></li>
                        <li><NavLink to='/dialogs'>Dialogs</NavLink></li>
                        <li><NavLink to='/settings'>Settings</NavLink></li>
                        <li><NavLink to='/select'>Custom Select</NavLink></li>
                        <li><NavLink to='/useReducer'>useReducer</NavLink></li>
                        <li><NavLink to='/users'>Users</NavLink></li>
                    </ul>
                </nav>
                <Friends friends={friends}/>
            </div>
        </>
    }
;

export default NavBar;