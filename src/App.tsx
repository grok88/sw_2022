import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
