import React from 'react';
import FontAwesome from 'react-fontawesome';
import {roundNumber} from '../../../services/mathCalculations.js';
import './CurrenciesPickerRow.styles.css';

export const CurrenciesPickerRow = (props) => {

    const handleCurrencySelectedClick = () =>
        props.onClick(props.currency);

    const currency = props.currency;

    const abbreviation = currency.Abbreviation;
    const rate = currency.Rate;
    const difference = roundNumber(currency.Difference);

    const arrayAbbreviation = ['usd', 'eur', 'jpy', 'cny', 'rub', 'try', 'gbp'];
    const classAbbreviation = arrayAbbreviation.indexOf(abbreviation.toLowerCase()) === -1 ? 'money' : abbreviation;

    return (
        <div
            className={`"row list__row ${(props.currencySelected.Abbreviation === abbreviation) ? 'list__row--selected' : ''}`}
            onClick={handleCurrencySelectedClick}
        >
            <div className="row__value row__value--sign">
                <FontAwesome name={classAbbreviation.toLowerCase()}/>
            </div>
            <div className="row__value row__value--abbreviation">
                {abbreviation}
            </div>
            <div className="row__value row__value--rate">
                {rate}
            </div>
            <div
                className={`row__value row__value--difference ${(difference < 0) ? 'row__value--red' : 'row__value--green'}`}>
                {difference}
            </div>
        </div>
    );

};