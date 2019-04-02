import React from 'react';
import './CurrenciesPickerSearch.styles.css';

export const CurrenciesPickerSearch = (props) => {

    const handleCurrencyInputChange = (event) =>
        props.onCurrencyInputChange(event.target.value);

    return (
        <form className="currencies-picker__form">
            <input
                className="currencies-picker__search"
                type="text"
                placeholder="Search input"
                value={props.currencyInput}
                onChange={handleCurrencyInputChange}
            />
        </form>
    );

};
