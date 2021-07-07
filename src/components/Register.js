import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import ButtonLink from './buttons/ButtonLink';
import SectionHeader from './section-decoration/SectionDecoration';

function Register() {
    return(
        <div className="login register">
            <div className="login__container register__container container">
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
                    <div className="login__menu">
                        <SectionHeader text1={"Załóż konto"}/>
                        <div className="menu__form">
                            <form>
                                <div className="form__input">
                                    <label>
                                        Email
                                    </label><br/>
                                    <input type="text" name="email" className="login__input" />
                                </div>
                                <div className="form__input">
                                    <label>
                                        Hasło
                                    </label><br/>
                                    <input type="password" name="password" className="login__input" />
                                </div>
                                <div className="form__input">
                                    <label>
                                        Powtórz hasło
                                    </label><br/>
                                    <input type="password" name="password" className="login__input" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="header__buttons">
                        <ButtonLink path={"/login"} text={"Zaloguj się"}/>
                        <ButtonLink path={"/register"} text={"Załóż konto"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;