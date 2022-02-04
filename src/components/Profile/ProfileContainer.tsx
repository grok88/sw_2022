import React from 'react';
// @ts-ignore
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {ProfileStateType, ProfileType, setProfile} from '../../redux/profile-reducer';
import {toggleIsFetching} from '../../redux/users-reducer';
import {instance} from '../../API/api';
import {useParams} from 'react-router-dom';

export type ProfilePropsType = MapDispatchToProps & MapStateToProps;

class ProfileContainer extends React.Component<ProfilePropsType & {id:string}, {}> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        try {
            const response = instance.get(`/profile/${this.props.id}`);
            response.then(res => res.data)
                .then(res => {
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
            <main style={{outline: '1px solid red'}}>
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




