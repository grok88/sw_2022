import React from 'react';
import {addNewPostTextAC, addPostAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StoreContext} from '../../../StoreContext';

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


const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({
                                                                   // profilePage, dispatch
                                                               }) => {
        // const {newPostText, posts} = profilePage;
        // const newPostElement = useRef<HTMLTextAreaElement | null>(null);

        // const handler = {
        //     addPostHandler: () => {
        //         if (newPostText) dispatch(addPostAC());
        //     },
        //     changePostValueHandler: (value:string) => {
        //         dispatch(addNewPostTextAC(value));
        //     }
// }

        return (
            <StoreContext.Consumer>
                {
                    (store) => {
                        const profilePage = store.getState().profileReducer
                        const {newPostText, posts} = profilePage;

                        const handler = {
                            addPostHandler: () => {
                                if (newPostText) store.dispatch(addPostAC());
                            },
                            changePostValueHandler: (value: string) => {
                                store.dispatch(addNewPostTextAC(value));
                            }
                        }
                        return <MyPosts profilePage={profilePage} addNewPostText={handler.changePostValueHandler}
                                        addPost={handler.addPostHandler}/>
                    }
                }
            </StoreContext.Consumer>
        )
    }
;

export default MyPostsContainer;