import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import ButtonLink from './buttons/ButtonLink';
import SectionHeader from './section-decoration/SectionDecoration';
import validateEmail from './validateEmail';

function Register() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        password2: ""
    });
    const [error, setError] = useState({
        email: false,
        password: false,
        password2: false,
        notTheSame: false
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!form.email || !validateEmail(form.email)) {
            setError((prev) => ({ ...prev, email: true}));
        } else setError((prev) => ({ ...prev, email: false}));

        if(!form.password || form.password.length < 6) {
            setError((prev) => ({ ...prev, password: true}));
        } else setError((prev) => ({ ...prev, password: false}));

        if(!form.password2 || form.password2.length < 6) {
            setError((prev) => ({ ...prev, password2: true}));
        } else setError((prev) => ({ ...prev, password2: false}));

        if(form.password !== form.password2) {
            setError((prev) => ({ ...prev, notTheSame: true}));
        } else setError((prev) => ({ ...prev, notTheSame: false}));
    }

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
                            <form onSubmit={handleSubmit}>
                                <div className="form__inputs">
                                    <div className="form__input">
                                        <label>
                                            Email
                                        </label><br/>
                                        <input type="text" name="email" value={form.email} className="login__input" onChange={handleChange}/><br/>
                                        {error.email === true ? (
                                            <span className="error-message">Podany email jest nieprawidłowy!</span>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="form__input">
                                        <label>
                                            Hasło
                                        </label><br/>
                                        <input type="password" name="password" value={form.password} className="login__input" onChange={handleChange}/><br/>
                                        {error.password === true ? (
                                            <div>
                                                <span className="error-message">Podane hasło jest nieprawidłowe!</span><br/>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                        {error.notTheSame === true ? (
                                            <span className="error-message">Hasła nie są identyczne!</span>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="form__input">
                                        <label>
                                            Powtórz hasło
                                        </label><br/>
                                        <input type="password" name="password2" value={form.password2} className="login__input" onChange={handleChange}/><br/>
                                        {error.password2 === true ? (
                                            <div>
                                                <span className="error-message">Podane hasło jest nieprawidłowe!</span><br/>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                        {error.notTheSame === true ? (
                                            <span className="error-message">Hasła nie są identyczne!</span>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                <div className="header__buttons">
                                    <ButtonLink path={"/login"} text={"Zaloguj się"}/>
                                    <button type="submit">Załóż konto</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;