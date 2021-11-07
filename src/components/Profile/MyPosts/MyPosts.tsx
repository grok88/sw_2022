import React from 'react';
// @ts-ignore
import styles from './myPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            MyPost
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div className={styles.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;