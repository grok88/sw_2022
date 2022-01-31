//CONSTS
import {DialogItemPropsType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageItemPropsType} from '../components/Dialogs/Message/Message';
import {ActionsType} from './store';

const ADD_MESSAGE = '/SW/ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = '/SW/ADD-NEW-MESSAGE-TEXT';

export  type DialogsStateType = {
    dialogs: DialogItemPropsType[]
    messages: MessageItemPropsType[]
    newDialogText: string
}

export type  DialogsActionsType = AddMessageAC | AddNewMessageTextAC;

export type AddMessageAC = ReturnType<typeof addMessage>;
export type AddNewMessageTextAC = ReturnType<typeof addNewMessageText>;

const initialState: DialogsStateType = {
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
}
export const dialogReducer = (state: DialogsStateType = initialState, action: ActionsType): DialogsStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const messages = state.messages;
            const newMessage: MessageItemPropsType = {
                id: messages.length + 1,
                message: state.newDialogText
            }

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newDialogText: ''
            }
        case ADD_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newDialogText: action.message
            };
        default:
            return state;
    }
}

//ACTIONS
export const addMessage = () => {
    return {
        type: ADD_MESSAGE
    } as const;
}
export const addNewMessageText = (message: string) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        message
    } as const;
}