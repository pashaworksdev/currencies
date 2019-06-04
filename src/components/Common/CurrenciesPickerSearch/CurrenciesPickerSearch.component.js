import React from 'react';

import './CurrenciesPickerSearch.styles.scss';

const CurrenciesPickerSearch = props => {

    const {
        enteredCurrency,
    } = props;

    const enterCurrency = event =>
        props.enterCurrency(event.target.value);

    return (
        <form className="currencies-picker__form">
            <input
                className="currencies-picker__search"
                type="text"
                placeholder="Search input"
                value={enteredCurrency}
                onChange={enterCurrency}
            />
        </form>
    );
};

export default CurrenciesPickerSearch;
