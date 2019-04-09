import React, {Component} from 'react';

import {CurrenciesPickerRow} from '../CurrenciesPickerRow';
import './CurrenciesPickerTable.styles.css';

export class CurrenciesPickerTable extends Component {

    componentDidMount() {
        this.props.getCurrencies();
    };

    handleCurrencySelectedClick = (currencySelected) => {
        let currency = this.props.currencySelected === currencySelected ? {} : currencySelected;
        this.props.onCurrencySelectedClick(currency);
    };

    createRows() {
        return this.props.currenciesBase.map((currency) => {
            if (currency.Abbreviation.includes(this.props.currencyInput.toUpperCase())) {
                return (
                    <CurrenciesPickerRow
                        key={currency.Id}
                        currency={currency}
                        currencySelected={this.props.currencySelected}
                        onClick={this.handleCurrencySelectedClick}
                    />
                );
            }
        });
    };

    render() {
        let rows = this.createRows();
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

}
