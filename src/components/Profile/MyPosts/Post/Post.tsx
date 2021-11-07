import React from 'react';
// @ts-ignore
import styles from './post.module.css';

const Post = () => {
    return <div className={styles.item}>
        <img src="https://pbs.twimg.com/profile_images/1255102101958598656/kJDi-QFa.jpg" alt=""/>
        post1
        <div>
            <span>like</span>
        </div>
    </div>
};

export default Post;