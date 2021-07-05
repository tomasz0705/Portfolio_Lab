import React, { useState } from 'react';
import HomeFooter from './HomeFooter';
import SectionDecoration from './section-decoration/SectionDecoration';
import validateEmail from '../components/validateEmail';

function HomeContact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        textarea: "",
    });
    const [error, setError] = useState({
        name: false,
        email: false,
        textarea: false
    });
    const [data, setData] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted', form);

        if(form.name.includes(" ") || form.name === "" || form.name.length < 2) {
            console.log("imie")
            setError((prev) => ({ ...prev, name: true }));
            return;
        } else setError((prev) => ({ ...prev, name: false }));

        if(!form.email || !validateEmail(form.email)) {
            setError((prev) => ({ ...prev, email: true }));
            return;
        } else setError((prev) => ({ ...prev, email: false }));

        if(!form.textarea || form.textarea.length < 120) {
            setError((prev) => ({ ...prev, textarea: true }));
            return;
        } else setError((prev) => ({ ...prev, textarea: false}));

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                message: form.textarea
            }),
        })
        .then((data) => {
            console.log("OK", data);
            setData(true);
        })
        .catch((error) => {
            console.log("Error", error);
            setData(false);
        });
    }

    return(
        <div className="contact" id="contact">
            <div className="contact__container container">
                <div className="contact__form">
                    <SectionDecoration text1="Skontaktuj się z nami"/>
                    {data === true ? (
                        <span className="success-message">
                            Wiadomość została wysłana!<br/>
                            Wkrótce się skontaktujemy.
                        </span>
                    ) : (
                        ""
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form__inputs">
                            <div className="form__input">
                                <label>
                                    Wpisz swoje imię
                                </label><br/>
                                <input type="text" name="name" value={form.name} placeholder="Krzysztof" onChange={handleChange}/>
                                {error.name === true ? (
                                    <span className="error-message">
                                        Podane imię jest nieprawidłowe!
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="form__input">
                                <label>
                                    Wpisz swój email
                                </label><br/>
                                <input type="text" name="email" value={form.email} placeholder="abc@xyz.pl" onChange={handleChange}/>
                                {error.email === true ? (
                                    <span className="error-message">
                                        Podany email jest nieprawidłowy!
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div className="form__textarea">
                            <label>
                                Wpisz swoją wiadomość
                            </label><br/>
                            <textarea name="textarea" onChange={handleChange} value={form.textarea} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                            {error.textarea === true ? (
                                <span className="error-message">
                                    Wiadomość musi mieć conajmniej 120 znaków!
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="btn__contact">
                            <input type="submit" value="Wyślij" className="btn__send" />
                        </div>
                    </form>
                </div>
                <HomeFooter />
            </div>
        </div>
    );
}

export default HomeContact;