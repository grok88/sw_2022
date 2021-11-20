import React from 'react';
// @ts-ignore
import styles from './profile.module.css';
import MyPosts, {PostData} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
    posts:PostData[]
}

const Profile:React.FC<ProfilePropsType> = ({posts}) => {
    return (
        <main style={{outline: '1px solid red'}}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </main>
    );
};

export default Profile;