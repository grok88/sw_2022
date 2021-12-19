import React, {ChangeEvent} from 'react';
import styles from './dialogs.module.css';
import {DialogItem, DialogItemPropsType} from './DialogItem/DialogItem';
import {Message, MessageItemPropsType} from './Message/Message';
import {ActionsType, addMessageAC, addNewMessageTextAC} from '../../redux/state';

export type DialogsProps = {
    newDialogText: string
    dialogs: DialogItemPropsType[]
    messages: MessageItemPropsType[]
    dispatch: (actions: ActionsType) => void
}

const Dialogs: React.FC<DialogsProps> = ({messages, dialogs, newDialogText, dispatch}) => {

    const handler = {
        addMessage: () => {
            dispatch(addMessageAC());
        },
        changeDialogValueHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(addNewMessageTextAC(e.currentTarget.value));
        }
    }

    return (
        <div className={styles.dialogs} style={{outline: '1px solid red'}}>
            <div className={styles.dialogsItems}>
                {dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={styles.messages}>
                {messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
                <div>
                    <div>
                        <textarea value={newDialogText} onChange={handler.changeDialogValueHandler}></textarea>
                    </div>
                    <div>
                        <button onClick={handler.addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;