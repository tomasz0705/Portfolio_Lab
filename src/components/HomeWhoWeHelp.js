import React, { useState } from 'react';
import SectionDecoration from './section-decoration/SectionDecoration';

function HomeWhoWeHelp() {
    const [selectedType, setSelectedType] = useState('fundacja');
    const allOrganizations = [
        {
            tile: "Fundacja Dbam o zdrowie",
            desc: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            type: "fundacja"
        },
        {
            tile: "Fundacja Dla Dzieci",
            desc: "Pomoc dzieciom z ubogich rodzin.",
            type: "fundacja"
        },
        {
            tile: "Fundacja Bez Domu",
            desc: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
            type: "lokalne"
        }
    ];

    const changeInstitution = (inst) => {
        console.log("Zmieniono instytucję");
        setSelectedType(inst);
    }

    return (
        <div className="whowehelp" id="foundation-and-organizations">
            <div className="whowehelp__container container">
                <SectionDecoration text1="Komu pomagamy?" />
                <div className="whowehelp__buttons">
                    <button onClick={()=>{ changeInstitution('fundacja') }}>Fundacjom</button>
                    <button onClick={()=>{ changeInstitution('organizacja') }}>Organizacjom pozarządowym</button>
                    <button text="Lokalnym zbiórkom" onClick={()=>{ changeInstitution('lokalne') }} >Lokalnym zbiórkom</button>
                </div>
                <div className="whowehelp__description">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
                z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </div>
                <div className="whowehelp__organizations">
                    <ul>
                        {allOrganizations.filter((o) => o.type === selectedType).map((el, i) => {
                            return <li key={i}> {el.tile} </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomeWhoWeHelp;