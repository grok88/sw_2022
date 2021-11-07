import React from 'react';
// @ts-ignore
import styles from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <main style={{outline: '1px solid red'}} className={styles.content}>
            <div>
                <img src="https://i.imgur.com/3aXPJ2f.png" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </main>
    );
};

export default Profile;