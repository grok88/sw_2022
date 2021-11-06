import React from 'react';

const NavBar = () => {
    return (
        <nav style={{outline:'1px solid red'}} className={'sideBar'}>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Dialogs</a></li>
                <li><a href="#">Users</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;