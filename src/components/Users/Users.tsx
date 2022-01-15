import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {followAC, setUsersAC, unFollowAC, UsersStateType, UserType} from '../../redux/users-reducer';
import {Dispatch} from 'redux';

const users = [
    {
        id: 1, name: 'Alex', followed: true, status: 'I am a big boss', photos: {
            small: 'https://yandex.by/images/_crpd/cF50v2F30/3d08aaKaVBZ/ijY0bq8VfC7E5XrzBQDpPm-rZRNtgaBqryzB4uBpzvMNZ346jou3rIICDStWh4ylVrbddNY5RhbFcL0YyDrRXsjm5j-7V7zr03X79oAW-2Ij4mhIIB2uofGm3GWhv1uynrXratdQ8_ASHhj4D9HPdVIphWDApREQ2Ctz2Ro2FlAe5P3obUJw5FWrc_4IByrsYK6sTSzU6Ks44RbmpD_RsRJo7WfYXmW4W5oZvcmQyvHX4E1ryGXXmBKhM55dfNceWyy6aerKvqlebnm4Dg0qK-7hrUBlECZiPSVR5afxHzldICbkURvqMlyRnDdO24H_0ebE4Qvq1lfcKbdYkfpTGNUoOmuli_ghESvzPI4Ab2noquNLatMv6TtgHa-tvFby2qRlp1Sb5rxUlp48hh-K8p1qQ-sMp5CXUK9wWBU80F5SJrTnpEs0Ytznt_hPgSOlrOJkw6HUqS9-5hzqp_bSMtgnLicTEaswUhmevA-QCHgRq8wlTC_bkhTgMhdYd5AcnWjybyMAtugcYf62h0Brbq9i7UmpWOxh_WoXpqh-3P7TY6bnUBajfZ7R3nxCmAd6VmLLK8-lHNqaabvWkzESmFMvMCZpx3TmGu0-sQcI7mtm4qUCLJ-qafOt0iml_hzwFuplaJXS6LkT3Jx8QB2I99RsgKIGJ9DX3CK0X9x7UR6QqzkpYYN5rNLpMPxPwKxlpyrly6QXZ-34oprhqzYTtVau7yzW3uh8F1dR-EKQSTnfKQhlxi2THVImsFBa-JhZmuG55-zL_eTVbna0xQAnqOnh6wNkmqZiPWoUZ6F4kjMR76-h2Btv_5NcnjdAEYl6n27D4sRu3lsYLvycnf-YHNAm-mKsiDwrky_8ssTKLC5m46uI7Zrq4j0nnO4hfJj30izpLBSWprxeF9E_BpJFvFakASEJJRcfXC8xn9u42RPWZrvmrgg2Y95qd7mOgWUlKChize8W6eoyp5vobQ',
            large: null
        }
    },
    {
        id: 2,
        name: 'Serg',
        followed: false,
        status: 'I am a big father',
        photos: {
            small: 'https://avatars.mds.yandex.net/i?id=6800826dcb47da02afe319b4465e1a0f-5282880-images-thumbs&n=13&exp=1',
            large: null
        }
    }
]

type UsersProps = {
    usersPage: UsersStateType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const Users: React.FC<UsersProps> = ({usersPage: {items, error, totalCount}, unFollow, setUsers, follow}) => {

    useEffect(() => {
        setUsers(users);
    }, [])

    return <div>
        {
            items.map(user => {
                return <div key={user.id}>
                    <div>
                        <div>
                            <img src={user.photos.small as string | undefined} alt="" width={100} height={100}/>
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

type MapStateToPropsType = {
    usersPage: UsersStateType
}
const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        usersPage: state.usersReducer
    }
}

type mapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);

