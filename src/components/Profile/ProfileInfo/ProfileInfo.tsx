import React from 'react';
import styles from './profileInfo.module.css';
import {ProfileStateType} from '../../../redux/profile-reducer';
import {ProfileStatus} from './ProfileStatus';

export type ProfileInfoPropsType = {
    profilePage: ProfileStateType
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profilePage, updateStatus}) => {
    // const {photos, lookingForAJob, userId, lookingForAJobDescription, fullName, aboutMe} = profilePage.profile as ProfileType
    return <div className={styles.profileInfo}>
        <div>
            <img src="https://i.imgur.com/3aXPJ2f.png" alt="" width={'100%'} height={'100%'}/>
        </div>
        <div className={styles.profileUserInfo}>
            <div className={styles.profileUserImg}>
                <img
                    src={profilePage.profile && profilePage.profile.photos.small ? profilePage.profile.photos.small as string | undefined : 'https://avatars.mds.yandex.net/i?id=6800826dcb47da02afe319b4465e1a0f-5282880-images-thumbs&n=13&exp=1'}
                    alt="" width={100} height={100}/>
            </div>
            <div>
                <div>
                    <span><b>fullName : </b> {profilePage.profile?.fullName}</span>
                </div>
                <ProfileStatus profile={profilePage.profile} status={profilePage.status} updateStatus={updateStatus}/>
                <div>
                    <span><b>lookingForAJob : </b> {profilePage.profile?.lookingForAJob ? 'YES' : 'NO'}</span>
                </div>
                <div>
                    <span><b>lookingForAJobDescription : </b> {profilePage.profile?.lookingForAJobDescription || 'Not description'}</span>
                </div>
            </div>
        </div>
    </div>;
};

export default ProfileInfo;