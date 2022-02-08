import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';
import {AppRootType} from '../../redux/store';
import {AuthStateType, setAuthProfile, setUserAuth} from '../../redux/auth-reducer';
import {instance} from '../../API/api';
import {ProfileType} from '../../redux/profile-reducer';

type HeaderPropsType = {
    auth: AuthStateType
}

const Header: React.FC<HeaderPropsType> = ({auth: {data, isAuth, profile}}) => {
    return (
        <header className={styles.header}>
            {/*<img src="https://l-stat.livejournal.net/img/reskining/2011/desert/horizon-bg.jpg" alt="" width={'100%'} height={'100%'}/>*/}
            <div className={styles.loginBlock}>
                {isAuth
                    ? <div className={styles.authBlock}>
                        <img
                            src={profile && profile.photos.small ? profile.photos.small as string | undefined : 'https://avatars.mds.yandex.net/i?id=6800826dcb47da02afe319b4465e1a0f-5282880-images-thumbs&n=13&exp=1'}
                            alt="" width={80} height={80}/>
                        <span>{data?.login}</span>
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
        try {
            instance.get('/auth/me').then(res => res.data).then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserAuth(data);
                    try {
                        const response = instance.get(`/profile/${this.props.auth.data?.id}`);
                        response.then(res => res.data)
                            .then(res => {
                                this.props.setAuthProfile(res);
                                // this.props.toggleIsFetching(false);
                            })
                    } catch (e) {
                        console.log(e)
                    }
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    render({auth} = this.props) {
        return <Header auth={auth}/>
    }
}

type MapStateToProps = {
    auth: AuthStateType
}
type MapDispatchToProps = {
    setUserAuth: (data: AuthStateType) => void
    setAuthProfile: (profile: ProfileType) => void
}
const mapStateToProps = (state: AppRootType): MapStateToProps => {
    return {
        auth: state.auth
    }
}
export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootType>(mapStateToProps, {
    setUserAuth,
    setAuthProfile
})(HeaderContainer);

//setUserAuth = (data: AuthStateType) =>