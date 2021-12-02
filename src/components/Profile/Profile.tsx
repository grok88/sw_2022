import React from 'react';
// @ts-ignore
import styles from './profile.module.css';
import MyPosts, {PostData} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
    profilePage:{
        posts: PostData[]
        newPostText:string
    }
    addPost: (message: string) => void
    changePostValue :(message:string) => void
}

const Profile:React.FC<ProfilePropsType> = ({profilePage,addPost,changePostValue}) => {
    const {newPostText,posts} = profilePage;
    return (
        <main style={{outline: '1px solid red'}}>
            <ProfileInfo/>
            <MyPosts profilePage={profilePage} addPost={addPost} changePostValue={changePostValue}/>
        </main>
    );
};

export default Profile;