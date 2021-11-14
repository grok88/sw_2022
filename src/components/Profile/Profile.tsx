import React from 'react';
// @ts-ignore
import styles from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <main style={{outline: '1px solid red'}}>
            <ProfileInfo/>
            <MyPosts/>
        </main>
    );
};

export default Profile;