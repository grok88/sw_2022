import React from 'react';
import styles from './post.module.css';

type PostPropsType = {
    message: string
    likes: number
}

const Post: React.FC<PostPropsType> = ({message, likes}) => {
    return <div className={styles.item}>
        <img src="https://pbs.twimg.com/profile_images/1255102101958598656/kJDi-QFa.jpg" alt=""/>
        {message}
        <div>
            <span><span>{likes}</span> likes</span>
        </div>
    </div>
};

export default Post;