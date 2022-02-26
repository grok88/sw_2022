import axios from 'axios';
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
    } ,
    unfollow: (userId: number) => {
        return  instance.delete<FollowType>(`/follow/${userId}`).then(res => res.data)
    }
}
export const authAPI = {
    getAuth: () => {
        return instance.get('/auth/me').then(res => res.data)
    }
}
export const profileAPI = {
    getProfile: (id: string) => {
        return instance.get(`/profile/${id}`).then(res => res.data)
    }
}