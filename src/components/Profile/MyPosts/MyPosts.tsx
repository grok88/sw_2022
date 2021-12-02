import React, {ChangeEvent} from 'react';

import styles from './myPosts.module.css';
import Post from './Post/Post';

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
    addPost: (message: string) => void
    changePostValue: (message: string) => void
}


const MyPosts: React.FC<MyPostsPropsType> = ({profilePage, addPost, changePostValue}) => {
    const {newPostText, posts} = profilePage;
    // const newPostElement = useRef<HTMLTextAreaElement | null>(null);

    const handler = {
        addPostHandler: () => {
            if (newPostText) addPost(newPostText);
        },
        changePostValueHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            changePostValue(e.target.value);
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