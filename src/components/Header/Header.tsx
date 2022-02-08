import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';
import {AppRootType} from "../../redux/store";
import {AuthStateType, setUserAuth} from '../../redux/auth-reducer';
import {instance} from "../../API/api";

const Header = () => {
    return (
        <header className={styles.header}>
            {/*<img src="https://l-stat.livejournal.net/img/reskining/2011/desert/horizon-bg.jpg" alt="" width={'100%'} height={'100%'}/>*/}
            <div className={styles.loginBlock} style={{outline: '1px solid red'}}>
                <div>
                    <NavLink to='/login'>
                        <button className={styles.loginBtn}>Login</button>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

class HeaderContainer extends React.Component<MapStateToProps & MapDispatchToProps, any> {
    componentDidMount() {
        try {
            instance.get('/auth/me').then(res => res.data).then(data => {
                if(data.resultCode === 0) {
                    this.props.setUserAuth(data);
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        return <Header/>
    }
}

type MapStateToProps = {
    auth: AuthStateType
}
type MapDispatchToProps = {
    setUserAuth: (data: AuthStateType) => void
}
const mapStateToProps = (state: AppRootType): MapStateToProps => {
    return {
        auth: state.auth
    }
}
export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootType>(mapStateToProps, {setUserAuth})(HeaderContainer);

//setUserAuth = (data: AuthStateType) =>