import React, { useEffect, useState } from 'react';
import SectionDecoration from './section-decoration/SectionDecoration';
import Institutions from '../components/whoWeHelp/Institutions';

function HomeWhoWeHelp() {
    const [selectedType, setSelectedType] = useState('fundacja');
    const [institutions, setInstitutions] = useState([]);

    useEffect(() => {
        fetch(`https://portfoliolab-451bb-default-rtdb.europe-west1.firebasedatabase.app/institutions.json`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
        .then(response => response.json())
        .then(data => setInstitutions(data))
        .catch(error => {
          console.log("error", error);
        });
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
                    <button className="btn" id="btn-foundation" onClick={()=>{ changeInstitution('fundacja') }}>Fundacjom</button>
                    <button className="btn" id="btn-organizations" onClick={()=>{ changeInstitution('organizacja') }}>Organizacjom pozarządowym</button>
                    <button className="btn" id="btn-locale" onClick={()=>{ changeInstitution('lokalne') }} >Lokalnym zbiórkom</button>
                </div>
                <div className="whowehelp__description">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </div>
                <div className="whowehelp__organizations">
                    <Institutions institutions={institutions} selectedType={selectedType}/>
                </div>
            </div>
        </div>
    );
}

export default HomeWhoWeHelp;