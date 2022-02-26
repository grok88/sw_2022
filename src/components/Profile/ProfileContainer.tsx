import React from 'react';
// @ts-ignore
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {getProfile, ProfileStateType} from '../../redux/profile-reducer';
import {Navigate, useParams} from 'react-router-dom';
import styles from './profileContainer.module.css'

export type ProfilePropsType = MapDispatchToProps & MapStateToProps;

class ProfileContainer extends React.Component<ProfilePropsType & { id: string }, {}> {
    componentDidMount() {
        let id = this.props.id;
        if (!this.props.id) {
            id = '8886';
        }
        this.props.getProfile(id);
    }

    render({profilePage, isAuth} = this.props) {
        if (!profilePage.profile) {
            return null;
        }
        if (!isAuth) return <Navigate to="/login"/>
        return (
            <main className={styles.profileContainer}>
                <ProfileInfo profilePage={profilePage}/>
                <MyPostsContainer/>
            </main>
        );
    }
};

type MapStateToProps = {
    profilePage: ProfileStateType
    isAuth: boolean
}
const mapStateToProps = (state: AppRootType): MapStateToProps => {
    return {
        profilePage: state.profilePage,
        // @ts-ignore
        isAuth: state.auth.isAuth
    }
}
type MapDispatchToProps = {
    getProfile: (userId: string) => void
}

const WithRouterContainer = (Component: typeof React.Component) => {
    let RouterComponent = (props: ProfilePropsType) => {
        const {id} = useParams()
        return <Component {...props} id={id}/>;
    }
    return RouterComponent;
}

export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootType>(mapStateToProps, {
    getProfile
})(WithRouterContainer(ProfileContainer));




