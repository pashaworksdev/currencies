import React from 'react';
import FontAwesome from 'react-fontawesome';

import { roundNumber } from '../../../services/mathCalculations.js';

import './CurrenciesPickerRow.styles.scss';

const CurrenciesPickerRow = props => {

    const {
        abbreviation,
        rate,
        difference,
    } = props.currency;

    const arrayAbbreviation = ['usd', 'eur', 'jpy', 'cny', 'rub', 'try', 'gbp'];
    const classAbbreviation = arrayAbbreviation.includes(abbreviation.toLowerCase()) ? abbreviation : 'money';

    const selectCurrency = () =>
        props.selectCurrency(props.currency);

    return (
        <div
            className={`"row list__row ${(props.selectedCurrency.abbreviation === abbreviation) ? 'list__row--selected' : ''}`}
            onClick={selectCurrency}
        >
            <div className="row__value row__value--sign">
                <FontAwesome name={classAbbreviation.toLowerCase()} />
            </div>
            <div className="row__value row__value--abbreviation">
                {abbreviation}
            </div>
            <div className="row__value row__value--rate">
                {rate}
            </div>
            <div
                className={`row__value row__value--difference ${(difference < 0) ? 'row__value--red' : 'row__value--green'}`}
            >
                {roundNumber(difference)}
            </div>
        </div>
    );
};

export default CurrenciesPickerRow;
