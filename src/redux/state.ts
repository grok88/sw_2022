import {DialogItemPropsType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageItemPropsType} from '../components/Dialogs/Message/Message';
import {PostData} from '../components/Profile/MyPosts/MyPosts';
import {Friend} from '../components/NavBar/Friends/Friends';

//CONSTS
const ADD_POST = '/SW/ADD-POST';
const ADD_NEW_POST_TEXT = '/SW/ADD-NEW-POST-TEXT';
const ADD_MESSAGE = '/SW/ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';

export type StateType = {
    profilePage: {
        posts: PostData[]
        newPostText: string
    }
    dialogsPage: {
        dialogs: DialogItemPropsType[]
        messages: MessageItemPropsType[]
        newDialogText: string
    }
    friendsPage: {
        friends: Friend[];
    }
}

// ACTIONS
export type AddPostAC = ReturnType<typeof addPostAC>;
export type AddNewPostTextAC = ReturnType<typeof addNewPostTextAC>;
export type AddMessageAC = ReturnType<typeof addMessageAC>;
export type AddNewMessageTextAC = ReturnType<typeof addNewMessageTextAC>;

export type  ActionsType = AddPostAC | AddNewPostTextAC | AddMessageAC | AddNewMessageTextAC;

export type StoreType = {
    _state: StateType
    _subscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

//STORE
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you?', likes: 5},
                {id: 2, message: `I'm good`, likes: 7},
                {id: 3, message: 'How old are you?', likes: 12},
            ],
            newPostText: ''
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
            ],
            newDialogText: ''
        },
        friendsPage: {
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
    },
    _subscriber() {
        console.log('No subscriber');
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._subscriber = observer
    },
    dispatch(action: ActionsType) {
        switch (action.type) {
            case ADD_POST :
                const posts = this._state.profilePage.posts;

                const newPost: PostData = {id: posts.length + 1, message: this._state.profilePage.newPostText, likes: 0}
                posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._subscriber();
                break;
            case ADD_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.message;
                this._subscriber();
                break;
            case ADD_MESSAGE:
                const messages = this._state.dialogsPage.messages;
                const newMessage: MessageItemPropsType = {
                    id: messages.length + 1,
                    message: this._state.dialogsPage.newDialogText
                }
                messages.push(newMessage);
                this._state.dialogsPage.newDialogText = '';
                this._subscriber();
                break;
            case ADD_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newDialogText = action.message;
                this._subscriber();
                break;
        }
    },
}

//ACTIONS
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const;
}

export const addNewPostTextAC = (message: string) => {
    return {
        type: ADD_NEW_POST_TEXT,
        message
    } as const;
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const;
}

export const addNewMessageTextAC = (message: string) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        message
    } as const;
}

//@ts-ignore
window.store = store;