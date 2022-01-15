import {AddNewPostTextAC, AddPostAC, profileReducer} from './profile-reducer';
import {AddMessageAC, AddNewMessageTextAC, dialogReducer} from './dialogs-reducer';
import {combineReducers, createStore} from 'redux';
import {friendsReducer} from './friends-reducer';
import { usersReducer } from './users-reducer';


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogReducer,
    friendsReducer: friendsReducer,
    usersReducer: usersReducer
})

export const store = createStore(reducers, composeEnhancers());


export type AppRootType = ReturnType<typeof reducers>

// export type StateType = {
//     profilePage: {
//         posts: PostData[]
//         newPostText: string
//     }
//     dialogsPage: {
//         dialogs: DialogItemPropsType[]
//         messages: MessageItemPropsType[]
//         newDialogText: string
//     }
//     friendsPage: {
//         friends: Friend[];
//     }
// }

export type  ActionsType = AddPostAC | AddNewPostTextAC | AddMessageAC | AddNewMessageTextAC;

export type StoreType = {
    // state: AppRootType
    // _subscriber: () => void
    getState: () => AppRootType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

//STORE
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'How are you?', likes: 5},
//                 {id: 2, message: `I'm good`, likes: 7},
//                 {id: 3, message: 'How old are you?', likes: 12},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {name: 'Sveta', id: 1},
//                 {name: 'Sergey', id: 2},
//                 {name: 'Tanya', id: 3},
//                 {name: 'Alex', id: 4},
//                 {name: 'Клара', id: 5},
//                 {name: 'Иван', id: 6},
//             ],
//             messages: [
//                 {message: 'Hi, how are you?', id: 1},
//                 {message: 'I love my parents!!!', id: 2},
//                 {message: 'I have a dog.', id: 3},
//             ],
//             newDialogText: ''
//         },
//         friendsPage: {
//             friends: [
//                 {
//                     id: 1,
//                     name: 'Sveta',
//                     url: 'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'
//                 },
//                 {
//                     id: 2,
//                     name: 'Sveta',
//                     url: 'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'
//                 },
//                 {
//                     id: 3,
//                     name: 'Sveta',
//                     url: 'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'
//                 },
//                 {
//                     id: 4,
//                     name: 'Sveta',
//                     url: 'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'
//                 },
//                 {
//                     id: 5,
//                     name: 'Sveta',
//                     url: 'https://i.pinimg.com/originals/6b/1a/d5/6b1ad5c10e932a267d41ac054bed8109.jpg'
//                 },
//                 {
//                     id: 6,
//                     name: 'Rita',
//                     url: 'https://get.wallhere.com/photo/women-model-blonde-long-hair-swimming-pool-bikini-swimwear-clothing-Renee-Somerfield-307880.jpg'
//                 },
//                 {
//                     id: 7,
//                     name: 'Margarita',
//                     url: 'https://www.hawtcelebs.com/wp-content/uploads/2014/11/MICHELLE-LEWIN-in-Bikini-on-the-Beach-in-Miami-7.jpg'
//                 },
//             ]
//         }
//     },
//     _subscriber() {
//         console.log('No subscriber');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer: () => void) {
//         this._subscriber = observer
//     },
//     dispatch(action: ActionsType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
//         this._subscriber();
//     },
// }


//@ts-ignore
window.store = store;

