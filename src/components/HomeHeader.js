import React from 'react';

function HomeHeader() {
    return (
        <div className="header container">
            <ul className="nav">
                <li className="nav__link" id="login">Zaloguj</li>
                <li className="nav__link" id="sign-in">Zarejestruj się</li>
            </ul>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}

export default HomeHeader;