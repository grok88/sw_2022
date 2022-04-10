import React, {KeyboardEvent, useEffect, useState} from 'react';
import {ProfileType} from '../../../redux/profile-reducer';

type ProfileStatusPropsType = {
    profile: ProfileType | null
    status: null | string
    updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({profile, updateStatus, status}): React.ReactElement => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(status);

    useEffect(()=>{
        setValue(status);
    }, [status])

    const openEditMode = () => {
        setEditMode(true)
    }
    const closeEditMode = () => {
        setEditMode(false);

        updateStatus(value as string);
    }
    const onKeyCloseEditMode = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log(e)
        if (e.code === 'Enter') closeEditMode();
        if (e.code === 'Escape') setEditMode(false);
    }
    console.log(value)
    console.log(status)
    return <div>
        {
            editMode
                ? <div>
                    <b>status : </b>
                    <input type="text" value={value as string | undefined} onChange={e => setValue(e.target.value)}
                           onBlur={closeEditMode}
                           autoFocus
                           onKeyDown={e => onKeyCloseEditMode(e)}
                    />
                </div>
                : <div style={{cursor: 'pointer'}}>
                    <span onClick={openEditMode}><b>status : </b> {status}</span>
                </div>
        }
    </div>
}

