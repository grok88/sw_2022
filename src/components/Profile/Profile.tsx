import React from 'react';
// @ts-ignore
import styles from './profile.module.css';

const Profile = () => {
    return (
        <main style={{outline: '1px solid red'}} className={styles.content}>
            <div>
                <img src="https://i.imgur.com/3aXPJ2f.png" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                MyPost
                <div>
                    newPost
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;