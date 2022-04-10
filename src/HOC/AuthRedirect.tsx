import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppRootType} from '../redux/store';

const mapStateToPropsForRedirect = (state: AppRootType): { isAuth: boolean, } => {
    return {
        // @ts-ignore
        isAuth: state.auth.isAuth
    }
}

// export const withAuthRedirectContainer = (Component: typeof React.Component) => {
export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectContainer = (props: { isAuth: boolean }) => {
        const {isAuth, ...rest} = props
        // if (!isAuth) return <Navigate to="/login"/>
        return <Component {...rest as T}/>
    }
    const ConnectedRedirectContainer = connect(mapStateToPropsForRedirect)(RedirectContainer)
    return ConnectedRedirectContainer;
}