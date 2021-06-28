import React from 'react';
import SectionDecoration from './section-decoration/SectionDecoration';
import signature from '../assets/Signature.svg';
import people from '../assets/People.jpg';

function HomeAboutUs() {
    return (
        <div className="aboutus" id="about-us">
            <div className="aboutus__container">
                <div className="aboutus__description">
                    <SectionDecoration text1="O nas"/>
                    <div className="aboutus__text">Jesteśmy kilku osobowym, młodym zespołem, który postanowił rozwiązać problem z niechcianym rzeczami, które mamy w domu.
                        Celem projektu było stworzenie miejsca, w którym każdy będzie mógł oddać niepotrzebne rzeczy zaufanym instytucjom.
                        Jest wiele dostępnych rozwiązań, ale wiele z nich wymaga dodatkowego wysiłku lub nie ma do nich zaufania. W zweryfikowane miejsca trzeba pojechać, 
                        a nie ma na to czasu albo nie ma jak tam pojechać, a kontenery pod domem lub lokalne zbiórki są niezweryfikowane 
                        i nie wiadomo czy te rzeczy faktycznie trafią do potrzebujących. Dlatego wspólnie stworzyliśmy projekt, który jest stroną internetową z prostym formularzem, 
                        tym samym ułatwi użytkownikom oddanie rzeczy.
                    </div>
                    <div className="aboutus__signature">
                        <img src={signature} className="signature" alt="signature"/>
                    </div>
                </div>
                <div className="aboutus__image">
                    <img src={people} alt="people" />
                </div>
            </div>
        </div>
    );
}

export default HomeAboutUs;