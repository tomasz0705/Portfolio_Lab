import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ButtonLink from './buttons/ButtonLink';
import NavBar from './NavBar';
import SectionHeader from './section-decoration/SectionDecoration';
import app from '../config/firebase';
import { AuthContext } from './Auth';

function HomeHeaderLoggedIn({ history }) {
    const handleLogoutSubmit = useCallback(async event => {
        event.preventDefault();

        try {
            await app
                .auth()
                .signOut();
            history.push("/logout");
        } catch (error) {
            alert(error);
            }
    }, [history]);

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);

    return (
        <header className="header" id="start">
            <div className="header__container container">
                <div className="header__image">
                    <div className="image"></div>
                </div>
                <div className="header__content">
                    <nav>
                        <ul className="header__nav header__nav--first header__nav--loggedin">
                            <li className="nav__element" id="welcome">Witaj, {currentUser?.bc?.email}!</li>
                            <li className="nav__element" id="give-away-things"><Link to="/give-away-things" className="nav__link">Oddaj rzeczy</Link></li>
                            <button className="nav__logout" onClick={handleLogoutSubmit}>Wyloguj</button>
                        </ul>
                        <NavBar />
                    </nav>
                    <SectionHeader text1={"Zacznij, pomagać!"} text2={"Oddaj niechciane rzeczy w zaufane ręce"}/>
                    <div className="header__buttons">
                        <ButtonLink path={"/give-away-things"} text={"ODDAJ RZECZY"}/>
                        <ButtonLink path={"/login"} text={"ZORGANIZUJ ZBIÓRKĘ"}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default withRouter(HomeHeaderLoggedIn);