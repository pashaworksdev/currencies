import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.styles.css';

export const Header = () => (

    <header className="header current-page__header">
        <div className="header__logo">
            Project Currencies
        </div>
        <nav className="navigation header__navigation">
            <NavLink
                className="navigation__link"
                to='/'
            >
                Currencies
            </NavLink>
            <NavLink
                className="navigation__link"
                to='/about'
            >
                About
            </NavLink>
        </nav>
    </header>

);

