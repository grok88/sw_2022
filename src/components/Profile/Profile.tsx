import React from 'react';
// @ts-ignore
import {PostData} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export type ProfilePropsType = {
    // profilePage: {
    //     posts: PostData[]
    //     newPostText: string
    // }
    // dispatch: (actions: ActionsType) => void
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 // profilePage, dispatch
}) => {
    return (
        <main style={{outline: '1px solid red'}}>
            <ProfileInfo/>
            <MyPostsContainer
                // profilePage={profilePage} dispatch={dispatch}
            />
        </main>
    );
};

export default Profile;