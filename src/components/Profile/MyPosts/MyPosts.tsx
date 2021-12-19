import React, {ChangeEvent} from 'react';

import styles from './myPosts.module.css';
import Post from './Post/Post';
import {ActionsType, addNewPostTextAC, addPostAC} from '../../../redux/state';

export type PostData = {
    id: number
    message: string
    likes: number
}
export type MyPostsPropsType = {
    profilePage: {
        posts: PostData[]
        newPostText: string
    }
    dispatch: (actions: ActionsType) => void
}


const MyPosts: React.FC<MyPostsPropsType> = ({profilePage, dispatch}) => {
    const {newPostText, posts} = profilePage;
    // const newPostElement = useRef<HTMLTextAreaElement | null>(null);

    const handler = {
        addPostHandler: () => {
            if (newPostText) dispatch(addPostAC());
        },
        changePostValueHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(addNewPostTextAC(e.target.value));
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