import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from './buttons/ButtonLink';
import NavBar from '../components/NavBar';
import SectionHeader from './section-decoration/SectionDecoration';
import validateEmail from './validateEmail';
import { login } from '../features/userSlice';
import { auth } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    let history = useHistory();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState({
        email: false,
        password: false
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!form.email || !validateEmail(form.email)) {
            setError((prev) => ({ ...prev, email: true }));
        } else setError((prev) => ({ ...prev, email: false}));

        if(!form.password || form.password.length < 6) {
            setError((prev) => ({ ...prev, password: true}));
        } else setError((prev) => ({ ...prev, password: false}));

        // const { email, password } = event.target.elements;

        auth.signInWithEmailAndPassword(form.email, form.password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                }));history.push("/");
            }).catch((error) => alert(error));
    }

    return(
        <div className="login">
            <div className="login__container container">
                <div className="header__content--login">
                    <nav>
                        <ul className="header__nav header__nav--first">
                            <li className="nav__element" id="login"><Link to="/login" className="nav__link">Zaloguj</Link></li>
                            <li className="nav__element" id="sign-in"><Link to="/register" className="nav__link">Załóż konto</Link></li>
                        </ul>
                        <NavBar />
                    </nav>
                    <div className="login__menu">
                        <SectionHeader text1={"Zaloguj się"}/>
                        <div className="menu__form">
                            <form onSubmit={handleSubmit}>
                                <div className="form__inputs">
                                    <div className="form__input">
                                        <label>
                                            Email
                                        </label><br/>
                                        <input type="text" name="email" value={form.email} className="login__input" onChange={handleChange} /><br/>
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
                                        <input type="password" name="password" value={form.password} className="login__input" onChange={handleChange} /><br/>
                                        {error.password === true ? (
                                            <span className="error-message">Podane hasło jest nieprawidłowe!</span>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                <div className="header__buttons">
                                    <ButtonLink path={"/register"} text={"Załóż konto"}/>
                                    <button type="submit">Zaloguj się</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;