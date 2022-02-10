import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {
    follow,
    setCurrPage,
    setTotalUserCount,
    setUsers,
    toggleFollowingIsFetching,
    toggleIsFetching,
    unFollow,
    UsersStateType,
    UserType
} from '../../redux/users-reducer';
import {userAPI} from '../../API/api';
import Users from './Users';
import {Preloader} from '../../common/Preloader/Preloader';

type UsersProps = MapDispatchToProps & MapStateToPropsType;

class UsersClass extends Component<UsersProps, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        try {
            userAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
                .then(res => {
                    console.log(res)
                    this.props.setUsers(res.items);
                    this.props.setTotalUserCount(res.totalCount);
                    this.props.toggleIsFetching(false);
                });
        } catch (e) {
            console.log(e)
        }
    }

    componentWillUnmount() {
        // alert('componentWillUnmount')
    }

    setCurrentPage = (currPage: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrPage(currPage);
        try {
            userAPI.getUsers(currPage, this.props.usersPage.pageSize)
                .then(res => {
                    this.props.setUsers(res.items)
                    this.props.toggleIsFetching(false);
                });
        } catch (e) {
            console.log(e)
        }
    }


    render({usersPage: {totalCount, pageSize, currentPage, isFetching}, follow, unFollow,toggleFollowingIsFetching} = this.props) {
        // if(isFetching){
        //     return <div>
        //         <Preloader/>
        //     </div>
        // }
        return <>
            {isFetching && <div className={'preloaderWrapper fullSize'}>
                <Preloader/>
            </div>}
            <Users usersPage={this.props.usersPage} unFollow={unFollow} follow={follow}
                   setCurrentPage={this.setCurrentPage} toggleFollowingIsFetching={toggleFollowingIsFetching}/>
        </>
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
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingIsFetching : (isFetching: boolean, userId: number) => void
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId));
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrPage: (currPage: number) => {
//             dispatch(setCurrPageAC(currPage));
//         },
//         setTotalUserCount: (totalCount: number) => {
//             dispatch(setTotalUserCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }
// export default connect<MapStateToPropsType, MapDispatchToProps, {}, AppRootType>(mapStateToProps, mapDispatchToProps)(UsersClass);

export default connect<MapStateToPropsType, MapDispatchToProps, {}, AppRootType>(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleFollowingIsFetching
})(UsersClass);

