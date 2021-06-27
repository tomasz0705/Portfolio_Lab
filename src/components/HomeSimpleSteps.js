import React from 'react';
import ButtonLink from './buttons/ButtonLink';
import SectionDecoration from './section-decoration/SectionDecoration';

function HomeSimpleSteps() {
    return(
        <div className="simplesteps" id="about-project-idea">
            <div className="simplesteps__container">
                <SectionDecoration text1="Wystarczą 4 proste kroki"/>
                <div className="foursteps">
                    <div className="foursteps__container">
                        <div className="foursteps__content">
                        <img src={require('../assets/Icon-1.svg')} className="content__image" alt="T-shirt"/>
                            <h3>Wybierz rzeczy</h3>
                            <hr/>
                            <p>ubrania, zabawki,<br/>sprzęt i inne</p>
                        </div>
                        <div className="foursteps__content">
                        <img src={require('../assets/Icon-2.svg')} className="content__image" alt="bag"/>
                            <h3>Spakuj je</h3>
                            <hr/>
                            <p>skorzystaj z<br/>worków na śmieci</p>
                        </div>
                        <div className="foursteps__content">
                        <img src={require('../assets/Icon-3.svg')} className="content__image" alt="magnifier"/>
                            <h3>Zdecyduj komu<br/>chcesz pomóc</h3>
                            <hr/>
                            <p>wybierz zaufane<br/>miejsce</p>
                        </div>
                        <div className="foursteps__content">
                        <img src={require('../assets/Icon-4.svg')} className="content__image" alt="circle"/>
                            <h3>Zamów kuriera</h3>
                            <hr/>
                            <p>kurier przyjedzie<br/>w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
                <div className="simplesteps__button">
                    <ButtonLink text="Oddaj rzeczy" path="/login"/>
                </div>
            </div>
        </div>
    );
}

export default HomeSimpleSteps;