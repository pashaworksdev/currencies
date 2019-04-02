import React from 'react';
import './ConverterInput.styles.css';

export const ConverterInput = (props) => {

    const handleInputCurrencyChange = (event) =>
        props.onInputCurrencyChange(event.target.value);

    return (
        <form className='converter-input converter__form-input'>
            <div className="converter-input__value">Value</div>
            <input className="converter-input__field"
                   type="number"
                   placeholder="Insert the number"
                   onChange={handleInputCurrencyChange}
            />
            <div className="converter-input__currency">
                {props.currencySelected.Abbreviation}
            </div>
        </form>
    );

};