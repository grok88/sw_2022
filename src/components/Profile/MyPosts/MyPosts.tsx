import React from 'react';
// @ts-ignore
import styles from './myPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div className={styles.sendPost}>
                <h3>MyPost</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post message={'How are you?'} likes={5}/>
                <Post message={`I'm good`} likes={7}/>
                <Post message={'How old are you?'} likes={12}/>
            </div>
        </div>
    );
};

export default MyPosts;