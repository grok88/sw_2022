import React from 'react';
import {addMessageAC, addNewMessageTextAC, DialogsStateType} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/store';
import {Dispatch} from 'redux';

export type DialogsContainerProps = {
    // dialogsPage: {
    //     dialogs: DialogItemPropsType[]
    //     messages: MessageItemPropsType[]
    //     newDialogText: string
    // }
    // dispatch: (actions: ActionsType) => void
}

// const DialogsContainer: React.FC<DialogsContainerProps> = ({
//                                                                // dialogsPage, dispatch
//                                                            }) => {
//
//     // const handler = {
//     //     addMessage: () => {
//     //         dispatch(addMessageAC());
//     //     },
//     //     changeDialogValueHandler: (value: string) => {
//     //         dispatch(addNewMessageTextAC(value));
//     //     }
//     // }
//
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 const dialogsPage = store.getState().dialogsReducer;
//                 const handler = {
//                     addMessage: () => {
//                         store.dispatch(addMessageAC());
//                     },
//                     changeDialogValueHandler: (value: string) => {
//                         store.dispatch(addNewMessageTextAC(value));
//                     }
//                 }
//                 return <Dialogs addMessage={handler.addMessage} addNewMessageText={handler.changeDialogValueHandler}
//                                 dialogsPage={dialogsPage}/>
//             }
//         }
//     </StoreContext.Consumer>
// };

type MapStateToPropsType = {
    dialogsPage: DialogsStateType
}

type MapDispatchToPropsType = {
    addMessage: () => void
    addNewMessageText: (value: string) => void
}

const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC());
        },
        addNewMessageText: (value: string) => {
            dispatch(addNewMessageTextAC(value));
        }
    }
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, mapDispatchToProps)(Dialogs)

