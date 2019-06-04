import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.styles.scss';

const Header = props => {

    const {
        amountOfFavoriteCurrencies,
    } = props;

    return (
        <header className="header current-page__header">
            <div className="header__logo">
                Project Currencies
            </div>
            <nav className="navigation header__navigation">
                <NavLink
                    className="navigation__link"
                    to="/"
                >
                    Currencies
                </NavLink>
                <NavLink
                    className="navigation__link"
                    to="/converter"
                >
                    Converter
                </NavLink>
                <NavLink
                    className="navigation__link"
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    className="navigation__link"
                    to="/favorite"
                >
                    Favorite
                    <div className="navigation__amount-favorite">
                        {amountOfFavoriteCurrencies}
                    </div>
                </NavLink>
            </nav>
        </header>
    );

};

export default Header;
