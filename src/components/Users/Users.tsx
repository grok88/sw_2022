import React from 'react';
import {NavLink} from 'react-router-dom';
import {UsersStateType} from '../../redux/users-reducer';
import styles from './users.module.css';


type UsersProps = {
    usersPage: UsersStateType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currPage: number) => void
}

const Users: React.FC<UsersProps> = ({usersPage: {totalCount, currentPage, pageSize, items,}, unFollow, follow, setCurrentPage}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pagesCountArr: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesCountArr.push(i)
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
                            onClick={user.followed ? () => unFollow(user.id) : () => follow(user.id)}>{user.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
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

