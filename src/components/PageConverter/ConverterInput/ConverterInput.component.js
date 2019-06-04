import React from 'react';

import './ConverterInput.styles.scss';

const ConverterInput = props => {

    const enterAmountOfConvertibleCurrency = event =>
        props.enterAmountOfConvertibleCurrency(event.target.value);

    return (
        <form className="converter-input converter__converter-input">
            <label
                className="converter-input__value"
                htmlFor="converter-input__field"
            >
                Value
            </label>
            <input
                className="converter-input__field"
                id="converter-input__field"
                type="number"
                placeholder="Insert the number"
                onChange={enterAmountOfConvertibleCurrency}
            />
            <label
                className="converter-input__value"
                htmlFor="converter-input__field"
            >
                {props.selectedCurrency}
            </label>
        </form>
    );
};

export default ConverterInput;
