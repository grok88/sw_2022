const FOLLOW = '/SW/FOLLOW';
const UNFOLLOW = '/SW/UNFOLLOW';
const SET_USERS = '/SW/SET-USERS';
const SET_CURR_PAGE = '/SW/SET-CURR-PAGE';
const SET_TOTAL_USER_COUNT = '/SW/SET-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = '/SW/TOGGLE-IS-FETCHING';

export type FollowAC = ReturnType<typeof followAC>;
export type UnFollowAC = ReturnType<typeof unFollowAC>;
export type SetUsersAC = ReturnType<typeof setUsersAC>;
export type SetCurrPageAC = ReturnType<typeof setCurrPageAC>;
export type SetTotalUserCountAC = ReturnType<typeof setTotalUserCountAC>;
export type ToggleIsFetchingAC = ReturnType<typeof toggleIsFetchingAC>;

export type UsersActionsType =
    FollowAC
    | UnFollowAC
    | SetUsersAC
    | SetCurrPageAC
    | SetTotalUserCountAC
    | ToggleIsFetchingAC;


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
    pageSize: number
    currentPage: number,
    isFetching: boolean
}

const initialUserState: UsersStateType = {
    items: [],
    error: null,
    totalCount: 21,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
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
        case  SET_CURR_PAGE:
            return {
                ...state,
                currentPage: action.payload.currPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalCount: action.payload.totalCount
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
export const setCurrPageAC = (currPage: number) => {
    return {
        type: SET_CURR_PAGE,
        payload: {
            currPage
        }
    } as const
}
export const setTotalUserCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        payload: {
            totalCount
        }
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const;
}