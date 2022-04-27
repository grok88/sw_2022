import React from 'react';
import {connect} from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import styles from './Header.module.css';
import {AppRootType} from '../../redux/store';
import {authMe, AuthStateType, logout} from '../../redux/auth-reducer';

type HeaderPropsType = {
    auth: AuthStateType
    logout: () => void
}

const Header: React.FC<HeaderPropsType> = ({auth: {data, isAuth, profile}, logout}) => {
    let navigate = useNavigate();
    const logoutHandler = () => logout();
    console.log(isAuth)
    // if (!isAuth) navigate('/login')

    return (
        <header className={styles.header}>
            {/*<img src="https://l-stat.livejournal.net/img/reskining/2011/desert/horizon-bg.jpg" alt="" width={'100%'} height={'100%'}/>*/}
            <div className={styles.loginBlock}>
                {isAuth
                    ? <div className={styles.authBlock}>
                        <img
                            src={profile && profile.photos.small ? profile.photos.small as string | undefined : 'https://avatars.mds.yandex.net/i?id=6800826dcb47da02afe319b4465e1a0f-5282880-images-thumbs&n=13&exp=1'}
                            alt="" width={80} height={80}/>
                        <div className={styles.userBlock}>
                            <span>{data?.login}</span>
                            <button className={styles.loginBtn} onClick={logoutHandler}>Logout</button>
                        </div>
                    </div>
                    : <div className={styles.redirectBlock}>
                        <NavLink to='/login'>
                            <button className={styles.loginBtn}>Login</button>
                        </NavLink>
                    </div>
                }
            </div>
        </header>
    );
};

class HeaderContainer extends React.Component<MapStateToProps & MapDispatchToProps, any> {
    componentDidMount() {
        this.props.authMe();
    }

    render({auth, logout} = this.props) {
        return <Header auth={auth} logout={logout}/>
    }
}

type MapStateToProps = {
    auth: AuthStateType
}
type MapDispatchToProps = {
    authMe: () => void
    logout: () => void
}
const mapStateToProps = (state: AppRootType): MapStateToProps => {
    return {
        auth: state.auth
    }
}
export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootType>(mapStateToProps, {
    authMe,
    logout
})(HeaderContainer);

//setUserAuth = (data: AuthStateType) =>