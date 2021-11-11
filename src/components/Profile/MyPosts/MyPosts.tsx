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
                <Post message={'How are you?'} likes={5}/>
                <Post message={`I'm good`} likes={7}/>
                <Post message={'How old are you?'} likes={12}/>
            </div>
        </div>
    );
};

export default MyPosts;