import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, changePostValue, StateType} from './redux/state';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} changePostValue={changePostValue}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

