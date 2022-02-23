import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../config/firebase';
import { logout, selectUser } from '../features/userSlice';
import ButtonLink from './buttons/ButtonLink';
import NavBar from './NavBar';
import SectionHeader from './section-decoration/SectionDecoration';

function HomeHeader() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    let history = useHistory();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
        history.push("/logout");
    }

    return (
        <>
            {!user ? (
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
        ) : (
            <header className="header" id="start">
                <div className="header__container container">
                    <div className="header__image">
                        <div className="image"></div>
                    </div>
                    <div className="header__content">
                        <nav>
                            <ul className="header__nav header__nav--first header__nav--loggedin">
                                <li className="nav__element" id="welcome">Witaj, {user?.email}!</li>
                                <li className="nav__element" id="give-away-things"><Link to="/give-away-things" className="nav__link">Oddaj rzeczy</Link></li>
                                <button className="nav__logout" onClick={logoutOfApp}>Wyloguj</button>
                            </ul>
                            <NavBar />
                        </nav>
                        <SectionHeader text1={"Zacznij, pomagać!"} text2={"Oddaj niechciane rzeczy w zaufane ręce"}/>
                        <div className="header__buttons">
                            <ButtonLink path={"/give-away-things"} text={"ODDAJ RZECZY"}/>
                            <ButtonLink path={"/give-away-things"} text={"ZORGANIZUJ ZBIÓRKĘ"}/>
                        </div>
                    </div>
                </div>
            </header>
        )}
        </>
    );
}

export default HomeHeader;