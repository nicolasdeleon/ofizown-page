import React from 'react';
import '../css/NavBar.css';

export default function NavBar(props) {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img className="nav-logo-img" src={require('../res/images/ofizown-mini.png')} alt="Ofizown"></img>
            </div>
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}
