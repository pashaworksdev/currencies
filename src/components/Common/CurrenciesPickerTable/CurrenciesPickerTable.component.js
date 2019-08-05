import React, { Component } from 'react';

import CurrenciesPickerRow from '../CurrenciesPickerRow';

import './CurrenciesPickerTable.styles.scss';

class CurrenciesPickerTable extends Component {

    componentDidMount() {
        this.props.getStorageOfCurrencies();
    }

    selectCurrency = currencySelected => {
        const currency = this.props.selectedCurrency === currencySelected ? {} : currencySelected;
        this.props.selectCurrency(currency);
    };

    renderRows() {
        return this.props.storageOfCurrencies.map(currency => {
            if (currency.abbreviation.includes(this.props.enteredCurrency.toUpperCase())) {
                return (
                    <CurrenciesPickerRow
                        key={currency.id}
                        currency={currency}
                        selectedCurrency={this.props.selectedCurrency}
                        selectCurrency={this.selectCurrency}
                    />
                );
            }
        });
    }

    render() {
        return (
            <div className="table currencies-picker__table">
                <div className="headline table__headline">
                    <div className="headline__name headline__name--sign">
                        { 'Sign' }
                    </div>
                    <div className="headline__name headline__name--abbreviation">
                        { 'Abbr.' }
                    </div>
                    <div className="headline__name headline__name--rate">
                        { 'Rate' }
                    </div>
                    <div className="headline__name headline__name--difference">
                        { 'Difference' }
                    </div>
                </div>
                <div className="list table__list">
                    {this.renderRows()}
                </div>
            </div>
        );
    }

}

export default CurrenciesPickerTable;
