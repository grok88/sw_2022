import {addPost, ProfileStateType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppRootType} from '../../../redux/store';

type MapStateToPropsType = {
    profilePage: ProfileStateType
}
type MapDispatchToPropsType = {
    addPost: (value: string) => void
}

const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {
    addPost
})(MyPosts);