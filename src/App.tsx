import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import Select from './components/Select/Select';
import UseReducer from './components/UseReducer/Select';
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/Users';
import UsersContainer from './components/Users/UsersClass';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';

export type AppPropsType = {
    // store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    //custom select
    const items = [{value: '1', title: 'Minsk'}, {value: '2', title: 'Glybokoe'}, {value: '3', title: 'Beshenkovichi'}];
    const [value, setValue] = useState<string>('1');

    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <div className={'app-content'}>
                <Routes>
                    <Route path={'/profile/*'} element={<ProfileContainer/>}/>
                    <Route path={'/dialogs/*'}
                           element={<DialogsContainer/>}/>
                    <Route path={'/select'}
                           element={<Select value={value} onChange={setValue} items={items}/>}/>
                    <Route path={'/useReducer'}
                           element={<UseReducer/>}/>
                    {/*<Route path={'/users'} element={<UsersContainer/>}/>*/}
                    <Route path={'/users'} element={<UsersContainer/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

