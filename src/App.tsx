import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <div className={'app-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route  path={'/dialogs/*'} element={<Dialogs/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
