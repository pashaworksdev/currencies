import React from 'react';
import './ConverterOutput.styles.css';

export const ConverterOutput = (props) => {

    const handleOutputCurrencyChange = (event) =>
        props.onOutputCurrencyChange(event.target.value);

    let abbreviation = props.currenciesBase.map(function (item) {
        return (
            <option
                value={item.Abbreviation}
                key={item.Id}
            >
                {item.Abbreviation}
            </option>
        );
    });

    return (
        <form className='converter-output converter__form-output'>
            <div className="converter-output__value">
                Destination
            </div>
            <input
                className="converter-output__field"
                type="number"
                placeholder={`${props.result ? props.result : 'Result'}`}
                disabled
            />
            <select
                className="converter-output__select"
                onChange={handleOutputCurrencyChange}
            >
                {abbreviation}
            </select>
        </form>
    );

};