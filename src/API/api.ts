import axios from 'axios';
import {AuthData} from '../redux/auth-reducer';
import {ProfileType} from '../redux/profile-reducer';
import {UserType} from '../redux/users-reducer';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        // "api-key": "d957613d-94bb-4388-aef0-47e775e83atyjc5"
        'api-key': 'd957613d-94bb-4388-aef0-47e775e83ac5'
    }
});

type GetUsersRespType = {
    items: [] | UserType[]
    totalCount: number
    error: string | null
}

type FollowType = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: {}
}

export const userAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get<GetUsersRespType>(`/users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
    },
    follow: (userId: number) => {
        return instance.post<FollowType>(`/follow/${userId}`).then(res => res.data);
    },
    unfollow: (userId: number) => {
        return instance.delete<FollowType>(`/follow/${userId}`).then(res => res.data)
    }
}


export type AuthType = {
    messages: string[]
    resultCode: number
    data: AuthData
    fieldsErrors: null | String[],
}

export const authAPI = {
    getAuth: () => {
        return instance.get<AuthType>('/auth/me').then(res => res.data)
    } ,
    login: (email:string, password:string,rememberMe:boolean = false) => {
        return instance.post<AuthType>('/auth/login', {email, password,rememberMe}).then(res => res.data)
    } ,
    logout: () => {
        return instance.delete<AuthType>('/auth/login').then(res => res.data)
    }
}
export const profileAPI = {
    getProfile: (id: string) => {
        return instance.get<ProfileType>(`/profile/${id}`).then(res => res.data)
    },
    getStatus: (id: string) => {
        return instance.get<string>(`/profile/status/${id}`).then(res => res.data)
    },
    updateStatus: (status: string) => {
        return instance.put<AuthType>(`/profile/status`, {status}).then(res => res.data)
    },

}
export const friendsAPI = {
    getFriendsList: () => {
        return instance.get<GetUsersRespType>('users?friend=true').then(res => res.data)
    }
}