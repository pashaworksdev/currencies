import React from 'react';

import './ConverterOutput.styles.scss';

const ConverterOutput = props => {

    const selectAbbreviationOfConvertibleCurrency = event =>
        props.selectAbbreviationOfConvertibleCurrency(event.target.value);

    return (
        <form className="converter-output converter__converter-output">
            <label className="converter-output__value">
                Destination
            </label>
            <input
                className="converter-output__field"
                type="number"
                placeholder={`${props.getResultOfConversion ? props.getResultOfConversion : 'Result'}`}
                disabled
            />
            <select
                className="converter-output__select"
                onChange={selectAbbreviationOfConvertibleCurrency}
            >
                {props.renderDropDownList}
            </select>
        </form>
    );

};

export default ConverterOutput;
