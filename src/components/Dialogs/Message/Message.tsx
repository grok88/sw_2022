import React from 'react';
import styles from '../dialogs.module.css';

export type MessageItemPropsType = {
    message: string
    id: number
}
export const Message: React.FC<MessageItemPropsType> = ({message, id}) => {
    return <div className={styles.message}>{message}</div>
}