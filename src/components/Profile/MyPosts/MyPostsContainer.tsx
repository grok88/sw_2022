import {addNewPostText, addPost, ProfileStateType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppRootType} from '../../../redux/store';

export type PostData = {
    id: number
    message: string
    likes: number
}
export type MyPostsContainerPropsType = {
    // profilePage: {
    //     posts: PostData[]
    //     newPostText: string
    // }
    // dispatch: (actions: ActionsType) => void
}


type MapStateToPropsType = {
    profilePage: ProfileStateType
}
type MapDispatchToPropsType = {
    addPost: () => void
    addNewPostText: (value: string) => void
}

const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {
    addPost,
    addNewPostText
})(MyPosts);