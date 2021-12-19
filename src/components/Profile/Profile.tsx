import React from 'react';
// @ts-ignore
import styles from './profile.module.css';
import MyPosts, {PostData} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType} from '../../redux/state';

export type ProfilePropsType = {
    profilePage:{
        posts: PostData[]
        newPostText:string
    }
    dispatch: (actions:ActionsType) => void
}

const Profile:React.FC<ProfilePropsType> = ({profilePage,dispatch}) => {
    return (
        <main style={{outline: '1px solid red'}}>
            <ProfileInfo/>
            <MyPosts profilePage={profilePage} dispatch={dispatch}/>
        </main>
    );
};

export default Profile;