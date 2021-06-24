import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

function HomeHeader() {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__image">
                    <div className="image"></div>
                </div>
                <div className="header__content">
                    <nav>
                        <ul className="header__nav header__nav--first">
                            <li className="nav__element" id="login"><Link to="/login" className="nav__link">Zaloguj</Link></li>
                            <li className="nav__element" id="sign-in"><Link to="/signup" className="nav__link">Załóż konto</Link></li>
                        </ul>
                        <ul className="header__nav header__nav--second">
                            <li className="nav__element"><NavHashLink to="/" className="nav__link">Start</NavHashLink></li>
                            <li className="nav__element"><NavHashLink to="/#about-project-idea" className="nav__link">O co chodzi?</NavHashLink></li>
                            <li className="nav__element"><NavHashLink to="/#about-us" className="nav__link">O nas</NavHashLink></li>
                            <li className="nav__element"><NavHashLink to="/#foundation-and-organizations" className="nav__link">Fundacja i organizacje</NavHashLink></li>
                            <li className="nav__element"><NavHashLink to="/#contact" className="nav__link">Kontakt</NavHashLink></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    );
}

export default HomeHeader;