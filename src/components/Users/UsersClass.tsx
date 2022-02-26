import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {follow, getUsers, setCurrPage, unFollow, UsersStateType} from '../../redux/users-reducer';
import Users from './Users';
import {Preloader} from '../../common/Preloader/Preloader';

type UsersProps = MapDispatchToProps & MapStateToPropsType;

class UsersClass extends Component<UsersProps, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
    }

    componentWillUnmount() {
        // alert('componentWillUnmount')
    }

    setCurrentPage = (currPage: number) => {
        this.props.setCurrPage(currPage);
        this.props.getUsers(currPage, this.props.usersPage.pageSize);
    }


    render({usersPage: {totalCount, pageSize, currentPage, isFetching}, follow, unFollow,} = this.props) {
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
                   setCurrentPage={this.setCurrentPage}/>
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
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    // setUsers: (users: UserType[]) => void
    setCurrPage: (currPage: number) => void
    // setTotalUserCount: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleFollowingIsFetching: (isFetching: boolean, userId: number) => void
}

export default connect<MapStateToPropsType, MapDispatchToProps, {}, AppRootType>(mapStateToProps, {
    getUsers,
    follow,
    unFollow,
    setCurrPage,
})(UsersClass);

