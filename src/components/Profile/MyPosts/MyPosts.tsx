import React, {ChangeEvent} from 'react';

import styles from './myPosts.module.css';
import Post from './Post/Post';
import {ProfileStateType} from '../../../redux/profile-reducer';

export type PostData = {
    id: number
    message: string
    likes: number
}
export type MyPostsPropsType = {
    profilePage: ProfileStateType
    addPost: () => void
    addNewPostText: (value: string) => void
}


const MyPosts: React.FC<MyPostsPropsType> = ({profilePage, addNewPostText, addPost}) => {
    const {newPostText, posts,profile} = profilePage;
    console.log(profile)
    // const newPostElement = useRef<HTMLTextAreaElement | null>(null);

    const handler = {
        addPostHandler: () => {
            if (newPostText) addPost();
        },
        changePostValueHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            addNewPostText(e.target.value);
        }
    }

    return (
        <div>
            <div className={styles.sendPost}>
                <h3>MyPost</h3>
                <div>
                    <textarea value={newPostText}
                              onChange={handler.changePostValueHandler}></textarea>
                </div>
                <div>
                    <button onClick={handler.addPostHandler}>Send</button>
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