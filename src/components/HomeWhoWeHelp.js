import React, { useEffect, useState } from 'react';
import SectionDecoration from './section-decoration/SectionDecoration';
import { API_URL } from './constants/constants';

function HomeWhoWeHelp() {
    const [selectedType, setSelectedType] = useState('fundacja');
    const [institutions, setInstitutions] = useState([]);

/*     const number = 0;
    const [pageNumber, setPageNumber] = useState(number);

    const sidesCountTable=[];
    let sidesCount = institutions.length/3;

    for(let i = 0; i < sidesCount; i++){
        sidesCountTable.push(i)
    }

    useEffect(function () {
        setPageNumber(number);
    },[]); */

    useEffect(() => {
        fetch(`${API_URL}/institutions`)
          .then((response) => response.json())
          .then((data) => setInstitutions(data));
      }, []);

    const changeInstitution = (inst) => {
        console.log("Zmieniono instytucję");
        setSelectedType(inst);
    }

    return (
        <div className="whowehelp" id="foundation-and-organizations">
            <div className="whowehelp__container container">
                <SectionDecoration text1="Komu pomagamy?" />
                <div className="whowehelp__buttons">
                    <button className="btn" onClick={()=>{ changeInstitution('fundacja') }}>Fundacjom</button>
                    <button className="btn" onClick={()=>{ changeInstitution('organizacja') }}>Organizacjom pozarządowym</button>
                    <button className="btn" onClick={()=>{ changeInstitution('lokalne') }} >Lokalnym zbiórkom</button>
                </div>
                <div className="whowehelp__description">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
                z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </div>
                <div className="whowehelp__organizations">
                    <ul>
                    {institutions.filter((o) => o.type === selectedType).map((el, i) => {
                        return (
                            <div key={i} className="organizations__content">
                                <div className="organizations__name">
                                    <h3>{el.tile}</h3>
                                    <p>{el.desc}</p>
                                </div>
                                <div className="organizations__resources">
                                    <p>{el.resources}</p>
                                </div>
                            </div>
                        );
                    })}
                    </ul>
                </div>
                <div className="whowehelp__btnpages">
                    <button className="btn btn__page">1</button>
                    <button className="btn btn__page">2</button>
                    <button className="btn btn__page">3</button>
                </div>
            </div>
        </div>
    );
}

export default HomeWhoWeHelp;