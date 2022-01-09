//CONSTS
import {PostData} from '../components/Profile/MyPosts/MyPosts';
import {ActionsType} from './store';

const ADD_POST = '/SW/ADD-POST';
const ADD_NEW_POST_TEXT = '/SW/ADD-NEW-POST-TEXT';

export  type ProfileStateType = {
    posts: PostData[]
    newPostText: string
}

export type  ProfileActionsType = AddPostAC | AddNewPostTextAC;

export type AddPostAC = ReturnType<typeof addPostAC>;
export type AddNewPostTextAC = ReturnType<typeof addNewPostTextAC>;

const initialState: ProfileStateType = {
    posts: [
        {id: 1, message: 'How are you?', likes: 5},
        {id: 2, message: `I'm good`, likes: 7},
        {id: 3, message: 'How old are you?', likes: 12},
    ],
    newPostText: ''
}
export const profileReducer = (state: ProfileStateType = initialState, action: ActionsType): ProfileStateType => {
    switch (action.type) {
        case ADD_POST :
            const posts = state.posts;

            const newPost: PostData = {id: posts.length + 1, message: state.newPostText, likes: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case ADD_NEW_POST_TEXT:
            state.newPostText = action.message;
            return {
                ...state,
                newPostText: action.message
            };
        default:
            return state;
    }
}


//ACTIONS
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const;
}

export const addNewPostTextAC = (message: string) => {
    return {
        type: ADD_NEW_POST_TEXT,
        message
    } as const;
}