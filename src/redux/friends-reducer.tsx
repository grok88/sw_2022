//CONSTS
import {UserType} from './users-reducer';
import {friendsAPI} from '../API/api';
import {AppRootType, SWActionType, ThunkType} from './store';
import {ThunkDispatch} from 'redux-thunk';

const SET_FRIENDS = 'SW/SET-FRIENDS';
//
// export type Friend = {
//     followed: boolean
//     id: number
//     name: string
//     photos: { small: null | string, large: null | string }
//     status: null | string
//     uniqueUrlName: null | string
// }

export type FriendsType = {
    error: null | string
    items: UserType[]
    totalCount: number
}

export  type FriendsStateType = {
    friends: null | FriendsType
}

//actions Type
export type SetFriendsAC = ReturnType<typeof setFriendsAC>;
export type FriendsActionsType = SetFriendsAC;

const initialState: FriendsStateType = {
    friends: null
}

export const friendsReducer = (state: FriendsStateType = initialState, action: FriendsActionsType): FriendsStateType => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.payload.friends
            }
        default:
            return state;
    }
}

//ACTIONS
export const setFriendsAC = (friends: FriendsType) => {
    return {
        type: SET_FRIENDS,
        payload: {
            friends
        }
    } as const;
}
//THUNKS
export const setFriends = (): ThunkType => async (dispatch: ThunkDispatch<AppRootType, unknown, SWActionType>) => {
    try {
        const data = await friendsAPI.getFriendsList()
        dispatch(setFriendsAC(data));
    } catch (e) {
        console.log(e)
    }
}