import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import ButtonLink from './buttons/ButtonLink';
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
                    <ul className="header__nav header__nav--second">
                        <li className="nav__element"><NavHashLink to="/" className="nav__link">Start</NavHashLink></li>
                        <li className="nav__element"><NavHashLink to="/#about-project-idea" className="nav__link">O co chodzi?</NavHashLink></li>
                        <li className="nav__element"><NavHashLink to="/#about-us" className="nav__link">O nas</NavHashLink></li>
                        <li className="nav__element"><NavHashLink to="/#foundation-and-organizations" className="nav__link">Fundacja i organizacje</NavHashLink></li>
                        <li className="nav__element"><NavHashLink to="/#contact" className="nav__link">Kontakt</NavHashLink></li>
                    </ul>
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