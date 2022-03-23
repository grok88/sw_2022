import React, {useEffect} from 'react';
// @ts-ignore
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {getProfile, ProfileStateType} from '../../redux/profile-reducer';
import {useParams} from 'react-router-dom';
import styles from './profileContainer.module.css'
import {withAuthRedirect} from '../../HOC/AuthRedirect';
import {compose} from 'redux';

export type ProfilePropsType = MapDispatchToProps & MapStateToProps ;

const ProfileContainer = (props: ProfilePropsType) => {
    const {profilePage, getProfile} = props;
    let {id} = useParams();

    useEffect(() => {
        if (!id) {
            id = '8886';
        }
        getProfile(id);
    }, [id])

    if (!profilePage.profile) {
        return null;
    }

    return (
        <main className={styles.profileContainer}>
            <ProfileInfo profilePage={profilePage}/>
            <MyPostsContainer/>
        </main>
    );

};

type MapStateToProps = {
    profilePage: ProfileStateType
}
const mapStateToProps = (state: AppRootType): MapStateToProps => {
    return {
        profilePage: state.profilePage,
    }
}

type MapDispatchToProps = {
    getProfile: (userId: string) => void
}

// const WithRouterContainer = (Component: typeof React.Component) => {
//     let RouterComponent = (props: ProfilePropsType) => {
//         const {id} = useParams()
//         return <Component {...props} id={id}/>;
//     }
//     return RouterComponent;
// }
//


export default compose<React.ComponentType>(
    connect<MapStateToProps, MapDispatchToProps, {}, AppRootType>(mapStateToProps, {
        getProfile
    }),
    withAuthRedirect,
)(ProfileContainer)



