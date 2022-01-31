import {addNewPostTextAC, addPostAC, ProfileStateType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppRootType} from '../../../redux/store';
import {Dispatch} from 'redux';

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


// const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({
//                                                                    // profilePage, dispatch
//                                                                }) => {
//         // const {newPostText, posts} = profilePage;
//         // const newPostElement = useRef<HTMLTextAreaElement | null>(null);
//
//         // const handler = {
//         //     addPostHandler: () => {
//         //         if (newPostText) dispatch(addPostAC());
//         //     },
//         //     changePostValueHandler: (value:string) => {
//         //         dispatch(addNewPostTextAC(value));
//         //     }
// // }
//
//         return (
//             <StoreContext.Consumer>
//                 {
//                     (store) => {
//                         const profilePage = store.getState().profileReducer
//                         const {newPostText, posts} = profilePage;
//
//                         const handler = {
//                             addPostHandler: () => {
//                                 if (newPostText) store.dispatch(addPostAC());
//                             },
//                             changePostValueHandler: (value: string) => {
//                                 store.dispatch(addNewPostTextAC(value));
//                             }
//                         }
//                         return <MyPosts profilePage={profilePage} addNewPostText={handler.changePostValueHandler}
//                                         addPost={handler.addPostHandler}/>
//                     }
//                 }
//             </StoreContext.Consumer>
//         )
//     };

type MapStateToPropsType = {
    profilePage: ProfileStateType
}
type MapDispatchToPropsType = {
    addPost: () => void
    addNewPostText: (value: string) => void
}

const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        profilePage: state.profileReducer
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        addNewPostText: (value: string) => {
            dispatch(addNewPostTextAC(value));
        }
    }
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, mapDispatchToProps)(MyPosts);