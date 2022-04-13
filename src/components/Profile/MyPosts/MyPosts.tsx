import React from 'react';

import styles from './myPosts.module.css';
import Post from './Post/Post';
import {ProfileStateType} from '../../../redux/profile-reducer';
import {AddNewPostForm} from './AddNewPostForm';

export type PostData = {
    id: number
    message: string
    likes: number
}
export type MyPostsPropsType = {
    profilePage: ProfileStateType
    addPost: (value: string) => void
}


const MyPosts: React.FC<MyPostsPropsType> = ({profilePage, addPost}) => {
    const {posts} = profilePage;

    const addPostHandler = (value: string) => {
        if (value) addPost(value);
    }

    return (
        <div className={styles.myPostsContainer}>
            <div className={styles.myPostsTitle}>
                <h3>MyPost</h3>
            </div>
            <div className={styles.myPostsBlock}>
                <div className={styles.posts}>
                    {
                        posts.map(post => {
                            return <Post key={post.id} message={post.message} likes={post.likes}/>
                        })
                    }
                </div>
                <div className={styles.sendPost}>
                    <h3>Add new Post!</h3>
                    <AddNewPostForm addPost={addPostHandler}/>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;