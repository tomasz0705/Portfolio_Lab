import React from 'react';

function HomeThreeColumns() {
    return(
        <section className="threecolumns">
            <div className="threecolumns__container container">
                <div className="threecolumns__column">
                    <h1>10</h1>
                    <span>ODDANYCH WORKÓW</span>
                    <p>Do worków możesz włożyć wszystkie elementy garderoby damksiej, męskiej i dziecięcej, torebki, biżuteria, działający sprzęt elektroniczny jak również książki.</p>
                </div>
                <div className="threecolumns__column">
                    <h1>5</h1>
                    <span>WSPARTYCH ORGANIZACJI</span>
                    <p>Rzeczy przekazane przez Ciebie do worka, zostaną przekazane na rzecz jednej z wielu fundacji charytatywnych, organizacji pozarządowych czy też lokalne zbiórki.</p>
                </div>
                <div className="threecolumns__column">
                    <h1>7</h1>
                    <span>ZORGANIZOWANYCH ZBIÓREK</span>
                    <p>Możemy z dumą powiedzieć, że projekt "Oddam w dobre ręce", który ma szczytny cel, ma na koncie kilka zorganizowanych zbiórek na rzecz fundacji i dalej w nieustającym tempie liczba ta ciągle rośnie.</p>
                </div>
            </div>
        </section>
    );
}

export default HomeThreeColumns;