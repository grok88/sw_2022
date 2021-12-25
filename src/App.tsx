import React, {useState} from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {Route, Routes} from 'react-router-dom';
import {StoreType} from './redux/store';
import Select from './components/Select/Select';
import UseReducer from './components/UseReducer/Select';
import DialogsContainer from './components/Dialogs/DialogsContainer';

export type AppPropsType = {
    // store: StoreType
}

const App: React.FC<AppPropsType> = ({
                                         // store
}) => {
    // let state = store.getState();
    // const {dialogsReducer, friendsReducer, profileReducer} = state;

    //custom select
    const items = [{value: '1', title: 'Minsk'}, {value: '2', title: 'Glybokoe'}, {value: '3', title: 'Beshenkovichi'}];
    const [value, setValue] = useState<string>('1');

    return (
        <div className="App">
            <Header/>
            <NavBar
                // friendsPage={friendsReducer}
            />
            <div className={'app-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Profile
                        // profilePage={profileReducer}
                        //                                        dispatch={store.dispatch}
                    />}/>
                    <Route path={'/dialogs/*'}
                           element={<DialogsContainer
                               // dialogsPage={dialogsReducer}
                               //                        dispatch={store.dispatch}
                           />}/>
                    <Route path={'/select'}
                           element={<Select value={value} onChange={setValue} items={items}/>}/>
                    <Route path={'/useReducer'}
                           element={<UseReducer/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

