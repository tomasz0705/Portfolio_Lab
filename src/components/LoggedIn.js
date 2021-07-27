import React from 'react';
import HomeHeaderLoggedIn from './HomeHeaderLoggedIn';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContact from './HomeContact';

function LoggedIn() {
    return (
        <>
            <HomeHeaderLoggedIn />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
        </>
    );
}

export default LoggedIn;