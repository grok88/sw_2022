import React from 'react';
import {addMessageAC, addNewMessageTextAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {StoreContext} from '../../StoreContext';

export type DialogsContainerProps = {
    // dialogsPage: {
    //     dialogs: DialogItemPropsType[]
    //     messages: MessageItemPropsType[]
    //     newDialogText: string
    // }
    // dispatch: (actions: ActionsType) => void
}

const DialogsContainer: React.FC<DialogsContainerProps> = ({
                                                               // dialogsPage, dispatch
                                                           }) => {

    // const handler = {
    //     addMessage: () => {
    //         dispatch(addMessageAC());
    //     },
    //     changeDialogValueHandler: (value: string) => {
    //         dispatch(addNewMessageTextAC(value));
    //     }
    // }

    return <StoreContext.Consumer>
        {
            (store) => {
                const dialogsPage = store.getState().dialogsReducer;
                const handler = {
                    addMessage: () => {
                        store.dispatch(addMessageAC());
                    },
                    changeDialogValueHandler: (value: string) => {
                        store.dispatch(addNewMessageTextAC(value));
                    }
                }
                return <Dialogs addMessage={handler.addMessage} addNewMessageText={handler.changeDialogValueHandler}
                                dialogsPage={dialogsPage}/>
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;