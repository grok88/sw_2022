const SET_USER_AUTH = 'SET_USER_AUTH';

type SetUserAuthAC = ReturnType<typeof setUserAuth>;
type AuthActionsType = SetUserAuthAC;

export type AuthStateType = {
    data: null | {
        id: number
        email: string
        login: string
    }
    resultCode: null | string
    messages: null | String[]
    fieldsErrors: null | String[],
    isAuth:boolean
}

const initialState: AuthStateType = {
    resultCode: null,
    messages: null,
    data: null,
    fieldsErrors: null,
    isAuth:false
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.payload.data,
                isAuth:true
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