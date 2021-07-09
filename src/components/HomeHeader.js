import React from 'react';
import { Link } from 'react-router-dom';
// import { NavHashLink } from 'react-router-hash-link';
import ButtonLink from './buttons/ButtonLink';
import NavBar from './NavBar';
import SectionHeader from './section-decoration/SectionDecoration';

function HomeHeader() {
    return (
        <header className="header" id="start">
            <div className="header__container container">
                <div className="header__image">
                    <div className="image"></div>
                </div>
                <div className="header__content">
                    <nav>
                        <ul className="header__nav header__nav--first">
                            <li className="nav__element" id="login"><Link to="/login" className="nav__link">Zaloguj</Link></li>
                            <li className="nav__element" id="sign-in"><Link to="/register" className="nav__link">Załóż konto</Link></li>
                        </ul>
                        <NavBar />
                    </nav>
                    <SectionHeader text1={"Zacznij, pomagać!"} text2={"Oddaj niechciane rzeczy w zaufane ręce"}/>
                    <div className="header__buttons">
                        <ButtonLink path={"/login"} text={"ODDAJ RZECZY"}/>
                        <ButtonLink path={"/login"} text={"ZORGANIZUJ ZBIÓRKĘ"}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomeHeader;