import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
    headers: {
        // "api-key": "d957613d-94bb-4388-aef0-47e775e83atyjc5"
        "api-key": "d957613d-94bb-4388-aef0-47e775e83ac5"
    }
});

