const FOLLOW = '/SW/FOLLOW';
const UNFOLLOW = '/SW/UNFOLLOW';
const SET_USERS = '/SW/SET-USERS';

export type FollowAC = ReturnType<typeof followAC>;
export type UnFollowAC = ReturnType<typeof unFollowAC>;
export type SetUsersAC = ReturnType<typeof setUsersAC>;

export type UsersActionsType = FollowAC | UnFollowAC | SetUsersAC;


export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: null | string
        large: null | string
    }
    followed: boolean
}
export type UsersStateType = {
    items: [] | UserType[]
    totalCount: number
    error: string | null
}

const initialUserState: UsersStateType = {
    items: [],
    error: null,
    totalCount: 0
}
export const usersReducer = (state: UsersStateType = initialUserState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                items: state.items.map(user => user.id === action.payload.userId ? ({...user, followed: true}) : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                items: state.items.map(user => user.id === action.payload.userId ? ({...user, followed: false}) : user)
            }
        case SET_USERS:
            return {
                ...state,
                items: [...action.payload.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}