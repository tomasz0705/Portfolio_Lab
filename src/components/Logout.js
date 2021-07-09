import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import ButtonLink from './buttons/ButtonLink';
import NavBar from './NavBar';
import SectionHeader from './section-decoration/SectionDecoration';

function Logout() {
    return (
        <div className="login logout">
        <div className="login__container logout__container container">
            <div className="header__content--login">
                <nav>
                    <ul className="header__nav header__nav--first">
                        <li className="nav__element" id="login"><Link to="/login" className="nav__link">Zaloguj</Link></li>
                        <li className="nav__element" id="sign-in"><Link to="/register" className="nav__link">Załóż konto</Link></li>
                    </ul>
                    <NavBar />
                </nav>
                <div className="login__menu logout__menu">
                    <SectionHeader text1={"Wylogowanie nastąpiło"} text2={"pomyślnie!"} />
                    <div className="logout__buttons">
                        <ButtonLink path={"/"} text={"Strona główna"}/>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Logout;