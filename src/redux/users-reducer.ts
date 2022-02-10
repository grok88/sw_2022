const FOLLOW = '/SW/FOLLOW';
const UNFOLLOW = '/SW/UNFOLLOW';
const SET_USERS = '/SW/SET-USERS';
const SET_CURR_PAGE = '/SW/SET-CURR-PAGE';
const SET_TOTAL_USER_COUNT = '/SW/SET-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = '/SW/TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IS_FETCHING = '/SW/TOGGLE-FOLLOWING-IS-FETCHING';

export type FollowAC = ReturnType<typeof follow>;
export type UnFollowAC = ReturnType<typeof unFollow>;
export type SetUsersAC = ReturnType<typeof setUsers>;
export type SetCurrPageAC = ReturnType<typeof setCurrPage>;
export type SetTotalUserCountAC = ReturnType<typeof setTotalUserCount>;
export type ToggleIsFetchingAC = ReturnType<typeof toggleIsFetching>;
export type ToggleFollowingIsFetching = ReturnType<typeof toggleFollowingIsFetching>;

export type UsersActionsType =
    FollowAC
    | UnFollowAC
    | SetUsersAC
    | SetCurrPageAC
    | SetTotalUserCountAC
    | ToggleIsFetchingAC
    | ToggleFollowingIsFetching;


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
    isFetching: boolean,
    toggleFollowingIsFetch: number[]
}

const initialUserState: UsersStateType = {
    items: [],
    error: null,
    totalCount: 21,
    pageSize: 3,
    currentPage: 1,
    isFetching: false,
    toggleFollowingIsFetch: []
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
        case TOGGLE_FOLLOWING_IS_FETCHING:
            return {
                ...state,
                toggleFollowingIsFetch: action.payload.isFetching
                    ? [...state.toggleFollowingIsFetch, action.payload.userId]
                    : state.toggleFollowingIsFetch.filter( id => id !== action.payload.userId)
            }
        default:
            return state;
    }
}

export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
export const setCurrPage = (currPage: number) => {
    return {
        type: SET_CURR_PAGE,
        payload: {
            currPage
        }
    } as const
}
export const setTotalUserCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        payload: {
            totalCount
        }
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const;
}
export const toggleFollowingIsFetching = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_FOLLOWING_IS_FETCHING,
        payload: {
            isFetching,
            userId
        }
    } as const;
}