import React from 'react';

function SectionDecoration({ text1, text2 }) {
    return(
        <div className="section__header">
            <h1>{text1}<br/>
                {text2}
            </h1>
            <div className="section__decoration"></div>
        </div>
    );
}

export default SectionDecoration;