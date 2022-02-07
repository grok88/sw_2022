import React, {useEffect} from 'react';
import style from './friends.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootType} from '../../../redux/store';
import {FriendsType, setFriends} from '../../../redux/friends-reducer';
import {instance} from '../../../API/api';
import {NavLink} from 'react-router-dom';


export type FriendsPropsType = {}

const Friends: React.FC<FriendsPropsType> = React.memo(() => {

    const friends = useSelector<AppRootType, null | FriendsType>(state => state.friendsPage.friends);

    const dispatch = useDispatch();

    useEffect(() => {
        instance.get('users?friend=true')
            .then(res => res.data)
            .then(data => {
                dispatch(setFriends(data));
            });

    }, []);

    if (!friends) return null;
    console.log(friends)


    return (
        <div className={style.FriendsBlock}>
            <h3>Friends</h3>
            <div className={style.FriendsItems}>
                {friends.items.map(friend => {
                    const {id, photos, name} = friend;
                    return <div key={id} className={style.FriendsItem}>
                        <NavLink to={`/profile/${id}`}>
                            <img
                                src={photos.small ? photos.small as string | undefined : 'https://avatars.mds.yandex.net/i?id=6800826dcb47da02afe319b4465e1a0f-5282880-images-thumbs&n=13&exp=1'}
                                alt="" width={100} height={100}/>
                        </NavLink>
                        <span style={{fontWeight: 700}}>{name}</span>
                    </div>
                })}
            </div>
        </div>
    );
});

export default Friends;