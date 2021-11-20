import React from 'react';
import styles from '../dialogs.module.css';
import {NavLink} from 'react-router-dom';

export type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem: React.FC<DialogItemPropsType> = ({name, id}) => {
    return <div className={`${styles.dialog} ${styles.active}`}>
        <NavLink to={`${id}`}>{name}</NavLink>
    </div>
}