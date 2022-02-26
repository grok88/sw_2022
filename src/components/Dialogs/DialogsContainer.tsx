import {addMessage, addNewMessageText, DialogsStateType} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {AuthStateType} from '../../redux/auth-reducer';

type MapStateToPropsType = {
    dialogsPage: DialogsStateType
    auth:AuthStateType
}

type MapDispatchToPropsType = {
    addMessage: () => void
    addNewMessageText: (value: string) => void
}

const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    console.log(state)
    return {
        dialogsPage: state.dialogsReducer,
        auth:state.auth
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {
    addMessage,
    addNewMessageText
})(Dialogs)

