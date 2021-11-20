import React from 'react';
import style from './friends.module.css'

export type Friend = {
    id:number
    name:string
    url:string
}
export type FriendsPropsType = {
    friends:Friend[];
}
const Friends: React.FC<FriendsPropsType> = ({friends}) => {
    return (
        <div className={style.FriendsBlock}>
            <h3>Friends</h3>
            <div className={style.FriendsItems}>
                {friends.map(friend =>{
                    const {id,url,name} = friend;
                    return  <div key={id} className={style.FriendsItem}>
                        <img src={url} alt=""/>
                        <span>{name}</span>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Friends;