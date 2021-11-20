import React from 'react';
import styles from './dialogs.module.css';
import {DialogItem, DialogItemPropsType} from './DialogItem/DialogItem';
import {Message, MessageItemPropsType} from './Message/Message';

export type DialogsProps = {
    dialogs:DialogItemPropsType[]
    messages: MessageItemPropsType[]
}

const Dialogs: React.FC<DialogsProps> = ({messages,dialogs}) => {
    return (
        <div className={styles.dialogs} style={{outline: '1px solid red'}}>
            <div className={styles.dialogsItems}>
                {dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={styles.messages}>
                {messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;