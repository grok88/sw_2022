import {ThunkDispatch} from 'redux-thunk';
import {ProfileType} from './profile-reducer';
import {AppRootType, SWActionType, ThunkType} from './store';
import {authAPI, AuthType} from '../API/api';

const SET_USER_AUTH = 'SW/SET-USER-AUTH';
const SET_AUTH_PROFILE = 'SW/SET-AUTH-PROFILE';
const TOGGLE_IS_FETCHING = 'SW/TOGGLE-IS-FETCHING';

type SetUserAuthAC = ReturnType<typeof setUserAuth>;
type SetAuthProfileAC = ReturnType<typeof setAuthProfile>;
type SetToggleIsFetching = ReturnType<typeof toggleIsFetching>;

export type AuthActionsType = SetUserAuthAC | SetAuthProfileAC | SetToggleIsFetching;

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
    profile: null | ProfileType,
    isFetching: boolean,
}

const initialState: AuthStateType = {
    resultCode: null,
    messages: null,
    data: null,
    fieldsErrors: null,
    isAuth: false,
    profile: null,
    isFetching: false
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.payload.data,
            }
        case SET_AUTH_PROFILE:
            return {
                ...state,
                profile: action.payload.profile
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        default:
            return state;
    }
}

export const setUserAuth = (data: AuthType & { isAuth: boolean }) => {
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
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const;
}

export const authMe = (): ThunkType => async (dispatch: ThunkDispatch<AppRootType, unknown, SWActionType>) => {
    dispatch(toggleIsFetching(true));
    try {
        const data = await authAPI.getAuth()
        if (data.resultCode === 0) {
            dispatch(setUserAuth({...data, isAuth: true}));
            dispatch(toggleIsFetching(false));
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
export const login = (email:string, password:string,rememberMe:boolean = false): ThunkType => async (dispatch: ThunkDispatch<AppRootType, unknown, SWActionType>) => {
    dispatch(toggleIsFetching(true));
    try {
        const data = await authAPI.login(email, password,rememberMe);
        console.log(data)
        if (data.resultCode === 0) {
            dispatch(setUserAuth({...data, isAuth: true}));
            dispatch(toggleIsFetching(false));
        }
    } catch (e) {
    }
}
export const logout = (): ThunkType => async (dispatch: ThunkDispatch<AppRootType, unknown, SWActionType>) => {
    dispatch(toggleIsFetching(true));
    try {
        const data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setUserAuth({...data, isAuth: false}));
            dispatch(toggleIsFetching(false));
        }
    } catch (e) {
    }
}