import React from 'react';
// import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';

function NavBar() {
    return (
        <ul className="header__nav header__nav--second">
            <li className="nav__element">
                <Link
                    activeClass="active"
                    to="start"
                    smooth={true}
                    duration={600}
                    className="nav__link"
                >
                    Start
                </Link>
            </li>
            <li className="nav__element">
                <Link
                    activeClass="active"
                    to="about-project-idea"
                    smooth={true}
                    duration={600}
                    className="nav__link"
                >
                    O co chodzi?
                </Link>
            </li>
            <li className="nav__element">
                <Link
                    activeClass="active"
                    to="about-us"
                    smooth={true}
                    duration={600}
                    className="nav__link"
                >
                    O nas
                </Link>
            </li>
            <li className="nav__element">
                <Link
                    activeClass="active"
                    to="foundation-and-organizations"
                    smooth={true}
                    duration={600}
                    className="nav__link"
                >
                    Fundacja i organizacje
                </Link>
            </li>
            <li className="nav__element">
                <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    duration={600}
                    className="nav__link"
                >
                    Kontakt
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;