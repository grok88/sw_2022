import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Profile/>
            <Footer/>
        </div>
    );
}

export default App;
