import {ProfileType} from './profile-reducer';

const SET_USER_AUTH = 'SW/SET_USER_AUTH';
const SET_AUTH_PROFILE = 'SW/SET-AUTH_PROFILE';

type SetUserAuthAC = ReturnType<typeof setUserAuth>;
type SetAuthProfileAC = ReturnType<typeof setAuthProfile>;

type AuthActionsType = SetUserAuthAC | SetAuthProfileAC;

export type AuthStateType = {
    data: null | {
        id: number
        email: string
        login: string
    }
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

export const setUserAuth = (data: AuthStateType) => {
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