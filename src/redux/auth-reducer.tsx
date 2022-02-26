import {ThunkDispatch} from 'redux-thunk';
import {ProfileType} from './profile-reducer';
import {AppRootType, SWActionType, ThunkType} from './store';
import {authAPI, AuthType} from '../API/api';

const SET_USER_AUTH = 'SW/SET_USER_AUTH';
const SET_AUTH_PROFILE = 'SW/SET-AUTH_PROFILE';

type SetUserAuthAC = ReturnType<typeof setUserAuth>;
type SetAuthProfileAC = ReturnType<typeof setAuthProfile>;

export type AuthActionsType = SetUserAuthAC | SetAuthProfileAC;

export type AuthData = {
    id: number
    email: string
    login: string
}
export type AuthStateType = {
    data: null | AuthData
    resultCode: null | string
    messages: null | String[]
    fieldsErrors: null | String[],
    isAuth: boolean
    profile: null | ProfileType
}

const initialState: AuthStateType = {
    resultCode: null,
    messages: null,
    data: null,
    fieldsErrors: null,
    isAuth: false,
    profile: null
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }
        case SET_AUTH_PROFILE:
            return {
                ...state,
                profile: action.payload.profile
            }
        default:
            return state;
    }
}

export const setUserAuth = (data: AuthType) => {
    return {
        type: SET_USER_AUTH,
        payload: {
            data
        }
    } as const;
}
export const setAuthProfile = (profile: ProfileType) => {
    return {
        type: SET_AUTH_PROFILE,
        payload: {
            profile
        }
    } as const;
}


export const authMe = (): ThunkType => async (dispatch: ThunkDispatch<AppRootType, unknown, SWActionType>) => {

    try {
        const data = await authAPI.getAuth()
        console.log(data)
        if (data.resultCode === 0) {
            dispatch(setUserAuth(data));
            // try {
            //     const response = instance.get(`/profile/${this.props.auth.data?.id}`);
            //     response.then(res => res.data)
            //         .then(res => {
            //             this.props.setAuthProfile(res);
            //             // this.props.toggleIsFetching(false);
            //         })
            // } catch (e) {
            //     console.log(e)
            // }
        }

    } catch (e) {

    }
}