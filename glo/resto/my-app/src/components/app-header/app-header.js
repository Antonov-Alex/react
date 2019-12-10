import React from 'react';

import { Link } from "react-router-dom";



import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to="/">
                Menu
            </Link>
            <Link to="/cart">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

export default AppHeader;