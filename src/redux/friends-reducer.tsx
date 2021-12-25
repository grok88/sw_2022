//CONSTS
import {Friend} from '../components/NavBar/Friends/Friends';


export  type FriensStateType = {
    friends: Friend[];
}

export type FriendsActionsType = { type: string };


const initialState: FriensStateType = {
    friends: [
        {
            id: 1,
            name: 'Sveta',
            url: 'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'
        },
        {
            id: 2,
            name: 'Sveta',
            url: 'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'
        },
        {
            id: 3,
            name: 'Sveta',
            url: 'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'
        },
        {
            id: 4,
            name: 'Sveta',
            url: 'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'
        },
        {
            id: 5,
            name: 'Sveta',
            url: 'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'
        },
        {
            id: 6,
            name: 'Rita',
            url: 'https://get.wallhere.com/photo/women-model-blonde-long-hair-swimming-pool-bikini-swimwear-clothing-Renee-Somerfield-307880.jpg'
        },
        {
            id: 7,
            name: 'Margarita',
            url: 'https://www.hawtcelebs.com/wp-content/uploads/2014/11/MICHELLE-LEWIN-in-Bikini-on-the-Beach-in-Miami-7.jpg'
        },
    ]
}
export const friendsReducer = (state: FriensStateType = initialState, action: FriendsActionsType): FriensStateType => {
    switch (action.type) {
        default:
            return state;
    }
}


//ACTIONS
