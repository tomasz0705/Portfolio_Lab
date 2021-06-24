import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLink({ text, path }) {
    return(
        <Link to={path} className="link__element">{text}</Link>
    );
}

export default ButtonLink;