import {DialogItemPropsType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageItemPropsType} from '../components/Dialogs/Message/Message';
import {PostData} from '../components/Profile/MyPosts/MyPosts';
import {Friend} from '../components/NavBar/Friends/Friends';
import {rerenderEntireTree} from '../rerender';

export type StateType = {
    profilePage: {
        posts: PostData[]
        newPostText:string
    }
    dialogsPage: {
        dialogs: DialogItemPropsType[]
        messages: MessageItemPropsType[]
    }
    friendsPage: {
        friends: Friend[];
    }
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you?', likes: 5},
            {id: 2, message: `I'm good`, likes: 7},
            {id: 3, message: 'How old are you?', likes: 12},
        ],
        newPostText:''
    },
    dialogsPage: {
        dialogs: [
            {name: 'Sveta', id: 1},
            {name: 'Sergey', id: 2},
            {name: 'Tanya', id: 3},
            {name: 'Alex', id: 4},
            {name: 'Клара', id: 5},
            {name: 'Иван', id: 6},
        ],
        messages: [
            {message: 'Hi, how are you?', id: 1},
            {message: 'I love my parents!!!', id: 2},
            {message: 'I have a dog.', id: 3},
        ]
    },
    friendsPage:{
        friends:[
            {id:1,name:"Sveta",url:'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'},
            {id:2,name:"Sveta",url:'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'},
            {id:3,name:"Sveta",url:'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'},
            {id:4,name:"Sveta",url:'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'},
            {id:5,name:"Sveta",url:'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'},
            {id:6,name:"Rita",url:'https://get.wallhere.com/photo/women-model-blonde-long-hair-swimming-pool-bikini-swimwear-clothing-Renee-Somerfield-307880.jpg'},
            {id:7,name:"Margarita",url:'https://www.hawtcelebs.com/wp-content/uploads/2014/11/MICHELLE-LEWIN-in-Bikini-on-the-Beach-in-Miami-7.jpg'},
        ]
    }
}

export const addPost = (message:string) => {
    const posts = state.profilePage.posts;

    const newPost:PostData = {id:posts.length + 1,message,likes:0}
    posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const changePostValue = (message:string) => {
    console.log(message)
    console.log(state.profilePage.newPostText)
    state.profilePage.newPostText = message;
    rerenderEntireTree(state);
}