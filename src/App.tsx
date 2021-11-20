import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {StateType} from './redux/state';

export type AppPropsType = {
    state: StateType
}

const App: React.FC<AppPropsType> = ({state: {profilePage, dialogsPage, friendsPage}}) => {
    const {posts} = profilePage;
    const {dialogs, messages} = dialogsPage;

    return (
        <div className="App">
            <Header/>
            <NavBar friendsPage={friendsPage}/>
            <div className={'app-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Profile posts={posts}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs messages={messages} dialogs={dialogs}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
