import {ProfileActionsType, profileReducer} from './profile-reducer';
import {dialogReducer, DialogsActionsType} from './dialogs-reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {FriendsActionsType, friendsReducer} from './friends-reducer';
import {UsersActionsType, usersReducer} from './users-reducer';
import {AuthActionsType, authReducer} from './auth-reducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsReducer: dialogReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type AppRootType = ReturnType<typeof reducers>
export type SWActionType =
    UsersActionsType
    | AuthActionsType
    | DialogsActionsType
    | FriendsActionsType
    | ProfileActionsType;

export type ThunkType = ThunkAction<void, AppRootType, unknown, SWActionType>;

// export type  ActionsType = AddPostAC | AddNewPostTextAC | AddMessageAC | AddNewMessageTextAC;
// export type StoreType = {
//     getState: () => AppRootType
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionsType) => void
// }
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

