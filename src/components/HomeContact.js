import React, { useState } from 'react';
import backgroundContact from '../assets/Background-Contact-Form.jpg'
import SectionDecoration from './section-decoration/SectionDecoration';

function HomeContact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setForm()
    }

    return(
        <div className="contact" id="contact">
            <div className="contact__container container">
                <div className="contact__form">
                    <SectionDecoration text1="Skontaktuj się z nami"/>
                    <form onSubmit={handleSubmit}>
                        <div className="form__inputs">
                            <div className="form__input">
                                <label>
                                    Wpisz swoje imię
                                </label><br/>
                                <input type="text" name="name" value={form.name} placeholder="Krzysztof"/>
                            </div>
                            <div className="form__input">
                                <label>
                                    Wpisz swój email
                                </label><br/>
                                <input type="email" name="email" value={form.email} placeholder="abc@xyz.pl"/>
                            </div>
                        </div>
                        <div className="form__textarea">
                            <label>
                                Wpisz swoją wiadomość<br/>
                                <textarea name="message" value={form.message} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                            </label>
                        </div>
                        <div className="btn__contact">
                            <input type="submit" value="Wyślij" className="btn__send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HomeContact;