import React from 'react';
import '../css/NavBar.css';

function NavBar(props) {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img className="nav-logo-img" src={require('../res/images/ofizown-mini.png')} alt="Ofizown"></img>
            </div>
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    return (
        <li className="nav-item">
            <a href="#" className="icon-button">
                {props.icon}
            </a>
        </li>
    );
}

export {
    NavBar,
    NavItem,
}

