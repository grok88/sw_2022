import React, {useRef} from 'react';
import styles from './dialogs.module.css';
import {DialogItem, DialogItemPropsType} from './DialogItem/DialogItem';
import {Message, MessageItemPropsType} from './Message/Message';

export type DialogsProps = {
    dialogs: DialogItemPropsType[]
    messages: MessageItemPropsType[]
}

const Dialogs: React.FC<DialogsProps> = ({messages, dialogs}) => {
    const addNewMessage = useRef<HTMLTextAreaElement | null>(null);

    const handler = {
        addMessage: () => {
            console.log(addNewMessage && addNewMessage.current && addNewMessage.current.value)
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
                        <textarea ref={addNewMessage}></textarea>
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