import React, {useState} from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {ActionsType, StateType} from './redux/state';
import Select from './components/Select/Select';

export type AppPropsType = {
    state: StateType
    dispatch: (actions: ActionsType) => void
}

const App: React.FC<AppPropsType> = ({state: {profilePage, dialogsPage, friendsPage}, dispatch}) => {
    const {dialogs, messages, newDialogText} = dialogsPage;

    //custom select
    const items = [{value: '1', title: 'Minsk'}, {value: '2', title: 'Glybokoe'}, {value: '3', title: 'Beshenkovichi'}];
    const [value, setValue] = useState<string>('1');

    return (
        <div className="App">
            <Header/>
            <NavBar friendsPage={friendsPage}/>
            <div className={'app-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={profilePage}
                                                               dispatch={dispatch}/>}/>
                    <Route path={'/dialogs/*'}
                           element={<Dialogs messages={messages} dialogs={dialogs} newDialogText={newDialogText}
                                             dispatch={dispatch}/>}/>
                    <Route path={'/select'}
                           element={<Select value={value} onChange={setValue} items={items}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

