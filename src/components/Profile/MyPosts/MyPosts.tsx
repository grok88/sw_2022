import React from 'react';
// @ts-ignore
import styles from './myPosts.module.css';
import Post from './Post/Post';

export type PostData = {
    id: number
    message: string
    likes: number
}
export type MyPostsPropsType = {
    posts:PostData[]
}


const MyPosts:React.FC<MyPostsPropsType> = ({posts}) => {
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
                {
                    posts.map(post => {
                        return <Post key={post.id} message={post.message} likes={post.likes}/>
                    })
                }
            </div>
        </div>
    );
};

export default MyPosts;