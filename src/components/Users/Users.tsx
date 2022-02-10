import React from 'react';
import {NavLink} from 'react-router-dom';
import {UsersStateType} from '../../redux/users-reducer';
import styles from './users.module.css';
import {instance} from '../../API/api';


type UsersProps = {
    usersPage: UsersStateType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currPage: number) => void
    toggleFollowingIsFetching: (isFetching: boolean, userId: number) => void
}

const Users: React.FC<UsersProps> = ({usersPage: {totalCount, currentPage, pageSize, items, toggleFollowingIsFetch}, unFollow, follow, setCurrentPage, toggleFollowingIsFetching}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pagesCountArr: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesCountArr.push(i)
    }

    const unFollowHandler = (userId: number) => {
        toggleFollowingIsFetching(true, userId);
        try {
            instance.delete(`/follow/${userId}`).then(res => res.data)
                .then(data => {
                    console.log(data)
                    if (data.resultCode === 0) {
                        unFollow(userId);
                    }
                    toggleFollowingIsFetching(false, userId);
                })

        } catch (e) {
        }

    }

    const FollowHandler = (userId: number) => {
        toggleFollowingIsFetching(true, userId);
        try {
            instance.post(`/follow/${userId}`).then(res => res.data)
                .then(data => {
                    console.log(data)
                    if (data.resultCode === 0) {
                        follow(userId)
                    }
                    toggleFollowingIsFetching(false, userId);
                })

        } catch (e) {
        }
    }

    return <div>
        <div className={styles.paginationBox} style={{marginBottom: '10px'}}>
            {
                pagesCountArr.map((p, i) => {
                    return <div
                        key={i}
                        className={p === currentPage ? styles.selectedPage : ''}
                        onClick={() => setCurrentPage(i + 1)}
                        style={{

                            padding: '5px 10px',
                            border: '1px solid black',
                            marginRight: '5px',
                            cursor: 'pointer'
                        }}>{p}</div>
                })
            }
        </div>
        {
            items.map(user => {
                return <div key={user.id}>
                    <div>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img
                                    src={user.photos.small ? user.photos.small as string | undefined : 'https://avatars.mds.yandex.net/i?id=6800826dcb47da02afe319b4465e1a0f-5282880-images-thumbs&n=13&exp=1'}
                                    alt="" width={100} height={100}/>
                            </NavLink>
                        </div>
                        <button
                            onClick={user.followed ? () => unFollowHandler(user.id) : () => FollowHandler(user.id)}
                            disabled={toggleFollowingIsFetch.some(id => id === user.id)}
                        >{user.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                    </div>
                    <div>
                        <div><b>name</b> : {user.name}</div>
                        <div><b>status </b>: {user.status}</div>
                    </div>
                </div>
            })
        }
    </div>
}


export default Users;

