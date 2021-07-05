import React from 'react';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

function HomeFooter() {
    return(
        <div className="footer">
            <div className="footer__info">
                <p>Copyright by CodersLab</p>
            </div>
            <div className="footer__socialmedia">
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="facebook-icon" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="instagram-icon" />
                </a>
            </div>
        </div>
    );
}

export default HomeFooter;