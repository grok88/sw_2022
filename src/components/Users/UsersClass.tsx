import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {
    followAC,
    setCurrPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UsersStateType,
    UserType
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import {instance} from '../../API/api';
import styles from './users.module.css'
import Users from './Users';

type UsersProps = MapDispatchToProps & MapStateToPropsType;
//     {
//     usersPage: UsersStateType
//     follow: (userId: number) => void
//     unFollow: (userId: number) => void
//     setUsers: (users: UserType[]) => void
//     setCurrPage: (currPage: number) => void
// }


class UsersClass extends Component<UsersProps, {}> {

    componentDidMount() {
        try {
            const response = instance.get(`/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            response.then(res => res.data).then(res => {
                console.log(res)
                this.props.setUsers(res.items);
                this.props.setTotalUserCount(res.totalCount);
            });
        } catch (e) {
            console.log(e)
        }
    }

    componentWillUnmount() {
        // alert('componentWillUnmount')
    }

    setCurrentPage = (currPage: number) => {
        this.props.setCurrPage(currPage);
        try {
            const response = instance.get(`/users?page=${currPage}&count=${this.props.usersPage.pageSize}`)
            response.then(res => res.data).then(res => {
                this.props.setUsers(res.items)
            });
        } catch (e) {
            console.log(e)
        }
    }


    render({usersPage: {totalCount, pageSize, currentPage}, follow, unFollow} = this.props) {
        return <Users usersPage={this.props.usersPage} unFollow={unFollow} follow={follow}
                      setCurrentPage={this.setCurrentPage}/>
    }
}

type MapStateToPropsType = {
    usersPage: UsersStateType
}
const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrPage: (currPage: number) => void
    setTotalUserCount: (totalCount: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        },
        setCurrPage: (currPage: number) => {
            dispatch(setCurrPageAC(currPage));
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
