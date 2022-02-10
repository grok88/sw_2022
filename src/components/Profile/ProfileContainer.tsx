import React from 'react';
// @ts-ignore
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {ProfileStateType, ProfileType, setProfile} from '../../redux/profile-reducer';
import {toggleIsFetching} from '../../redux/users-reducer';
import {profileAPI} from '../../API/api';
import {useParams} from 'react-router-dom';
import styles from './profileContainer.module.css'

export type ProfilePropsType = MapDispatchToProps & MapStateToProps;

class ProfileContainer extends React.Component<ProfilePropsType & { id: string }, {}> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        let id = this.props.id;
        if (!this.props.id) {
            id = '8886';
        }
        try {
            profileAPI.getProfile(id).then(res => {
                this.props.setProfile(res);
                this.props.toggleIsFetching(false);
            })
        } catch (e) {
            console.log(e)
        }
    }

    render({profilePage} = this.props) {
        if (!profilePage.profile) {
            return null;
        }
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
}
const mapStateToProps = (state: AppRootType): MapStateToProps => {
    return {
        profilePage: state.profilePage
    }
}
type MapDispatchToProps = {
    toggleIsFetching: (isFetching: boolean) => void
    setProfile: (profile: ProfileType) => void
}

const WithRouterContainer = (Component: typeof React.Component) => {
    let RouterComponent = (props: ProfilePropsType) => {
        const {id} = useParams()
        return <Component {...props} id={id}/>;
    }
    return RouterComponent;
}

export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootType>(mapStateToProps, {
    toggleIsFetching,
    setProfile
})(WithRouterContainer(ProfileContainer));




