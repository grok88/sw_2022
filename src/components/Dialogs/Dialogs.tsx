import React from 'react';
import styles from './dialogs.module.css';
import {NavLink} from 'react-router-dom';

const dialogs: DialogItemPropsType[] = [
    {name: 'Sveta', id: 1},
    {name: 'Sergey', id: 2},
    {name: 'Tanya', id: 3},
    {name: 'Alex', id: 4},
    {name: 'Клара', id: 5},
    {name: 'Иван', id: 6},
]
const messages: MessageItemPropsType[] = [
    {message: 'Hi, how are you?', id: 1},
    {message: 'I love my parents!!!', id: 2},
    {message: 'I have a dog.', id: 3},
]


export type DialogsProps = {}
const Dialogs: React.FC<DialogsProps> = ({}) => {
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
export type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem: React.FC<DialogItemPropsType> = ({name, id}) => {
    return <div className={`${styles.dialog} ${styles.active}`}>
        <NavLink to={`${id}`}>{name}</NavLink>
    </div>
}

export type MessageItemPropsType = {
    message: string
    id: number
}
const Message: React.FC<MessageItemPropsType> = ({message, id}) => {
    return <div className={styles.message}>{message}</div>
}

export default Dialogs;