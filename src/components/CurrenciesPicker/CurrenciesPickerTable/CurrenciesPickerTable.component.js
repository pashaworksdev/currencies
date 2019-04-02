import React from 'react';
import {CurrenciesPickerRow} from '../CurrenciesPickerRow';
import './CurrenciesPickerTable.styles.css';

export const CurrenciesPickerTable = (props) => {

    let rows = props.currenciesBase.map((currency) => {
        if (currency.Abbreviation.indexOf(props.currencyInput.toUpperCase()) !== -1) {
            return (
                <CurrenciesPickerRow
                    key={currency.Id}
                    currency={currency}
                    currencySelected={props.currencySelected}
                    onClick={props.OnCurrencySelectedClick}
                />
            );
        }
    });

    return (
        <div className="table currencies-picker__table">
            <div className="headline table__headline">
                <div className="headline__name headline__name--sign">
                    Sign
                </div>
                <div className="headline__name headline__name--abbreviation">
                    Abbr.
                </div>
                <div className="headline__name headline__name--rate">
                    Rate
                </div>
                <div className="headline__name headline__name--difference">
                    Difference
                </div>
            </div>
            <div className="list table__list">
                {rows}
            </div>
        </div>
    );

};
