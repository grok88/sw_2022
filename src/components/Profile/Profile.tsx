import React from 'react';
// @ts-ignore
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export type ProfilePropsType = {
    // profilePage: {
    //     posts: PostData[]
    //     newPostText: string
    // }
    // dispatch: (actions: ActionsType) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main style={{outline: '1px solid red'}}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    );
};

export default Profile;