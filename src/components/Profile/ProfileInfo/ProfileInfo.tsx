import React from 'react';
import styles from './profileInfo.module.css';

export type ProfileInfoPropsType = {}
const ProfileInfo: React.FC<ProfileInfoPropsType> = () => {
    return <div className={styles.profileInfo}>
        <div>
            <img src="https://i.imgur.com/3aXPJ2f.png" alt=""/>
        </div>
        <div>
            ava + description
        </div>
    </div>;
};

export default ProfileInfo;