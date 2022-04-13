//CONSTS
import {DialogItemPropsType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageItemPropsType} from '../components/Dialogs/Message/Message';

const ADD_MESSAGE = '/SW/ADD-MESSAGE';

export  type DialogsStateType = {
    dialogs: DialogItemPropsType[]
    messages: MessageItemPropsType[]
}

export type AddMessageAC = ReturnType<typeof addMessage>;
export type  DialogsActionsType = AddMessageAC;

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
}
export const dialogReducer = (state: DialogsStateType = initialState, action: DialogsActionsType): DialogsStateType => {
    switch (action.type) {
        case ADD_MESSAGE:

            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    message: action.payload.message
                }],
            }
        default:
            return state;
    }
}

//ACTIONS
export const addMessage = (message: string) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            message
        }
    } as const;
}
