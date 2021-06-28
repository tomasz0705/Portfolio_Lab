import React from 'react';
import ButtonLink from './buttons/ButtonLink';
import SectionDecoration from './section-decoration/SectionDecoration';

function HomeWhoWeHelp() {
    return (
        <div className="whowehelp" id="foundation-and-organizations">
            <div className="whowehelp__container">
                <SectionDecoration text1="Komu pomagamy?" />
                <div className="whowehelp__buttons">
                    <ButtonLink text="Fundacjom" />
                    <ButtonLink text="Organizacjom pozarządowym" />
                    <ButtonLink text="Lokalnym zbiórkom" />
                </div>
            </div>
        </div>
    );
}

export default HomeWhoWeHelp;