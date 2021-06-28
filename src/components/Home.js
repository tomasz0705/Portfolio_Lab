import React from 'react';
import HomeHeader from './HomeHeader';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeThreeColumns from './HomeThreeColumns';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';

function Home() {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
        </>
    );
}

export default Home;