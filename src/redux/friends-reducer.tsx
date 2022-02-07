//CONSTS
const SET_FRIENDS = 'SW/SET-FRIENDS';

export type Friend = {
    followed: boolean
    id: number
    name: string
    photos: { small: null | string, large: null | string }
    status: null | string
    uniqueUrlName: null | string
}

export type FriendsType = {
    error: null | string
    items: Friend[]
    totalCount: number
}

export  type FriendsStateType = {
    friends: null | FriendsType
}

//actions Type
export type SetFriendsAC = ReturnType<typeof setFriends>;

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
export const setFriends = (friends: FriendsType) => {
    return {
        type: SET_FRIENDS,
        payload: {
            friends
        }
    } as const;
}