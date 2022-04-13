import {addMessage, DialogsStateType} from '../../redux/dialogs-reducer';
import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {withAuthRedirect} from '../../HOC/AuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType = {
    dialogsPage: DialogsStateType
}

type MapDispatchToPropsType = {
    addMessage: (message: string) => void
}

const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReducer,
    }
}
export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {
        addMessage,
    }),
    withAuthRedirect
)(Dialogs)


