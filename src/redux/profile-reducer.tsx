//CONSTS
import {ThunkDispatch} from 'redux-thunk';
import {PostData} from '../components/Profile/MyPosts/MyPosts';
import {AppRootType, SWActionType, ThunkType} from './store';
import {profileAPI} from '../API/api';
import {toggleIsFetching} from './users-reducer';

const ADD_POST = '/SW/ADD-POST';
const SET_PROFILE = '/SW/SET-PROFILE';
const ADD_NEW_POST_TEXT = '/SW/ADD-NEW-POST-TEXT';

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string | null
        large: string | null
    }
}

export  type ProfileStateType = {
    posts: PostData[]
    newPostText: string,
    profile: null | ProfileType
}

export type  ProfileActionsType = AddPostAC | AddNewPostTextAC | setProfileAC;

export type AddPostAC = ReturnType<typeof addPost>;
export type AddNewPostTextAC = ReturnType<typeof addNewPostText>;
export type setProfileAC = ReturnType<typeof setProfile>;

const initialState: ProfileStateType = {
    posts: [
        {id: 1, message: 'How are you?', likes: 5},
        {id: 2, message: `I'm good`, likes: 7},
        {id: 3, message: 'How old are you?', likes: 12},
    ],
    newPostText: '',
    profile: null
}
export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
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
            state.newPostText = action.payload.message;
            return {
                ...state,
                newPostText: action.payload.message
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload.profile
            }
        default:
            return state;
    }
}


//ACTIONS
export const addPost = () => {
    return {
        type: ADD_POST
    } as const;
}

export const addNewPostText = (message: string) => {
    return {
        type: ADD_NEW_POST_TEXT,
        payload: {
            message
        }
    } as const;
}
export const setProfile = (profile: ProfileType) => {
    return {
        type: SET_PROFILE,
        payload: {
            profile
        }
    } as const;
}


export const getProfile = (userId: string): ThunkType => async (dispatch: ThunkDispatch<AppRootType, unknown, SWActionType>) => {
    dispatch(toggleIsFetching(true));
    try {
        const res = await profileAPI.getProfile(userId)
        console.log(res)
        dispatch(setProfile(res));
        dispatch(toggleIsFetching(false));

    } catch (e) {
        console.log(e)
    }
}