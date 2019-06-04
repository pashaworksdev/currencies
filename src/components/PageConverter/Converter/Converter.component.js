import React, { Component } from 'react';

import ConverterInput from '../ConverterInput';
import ConverterOutput from '../ConverterOutput';
import { convertCurrency } from '../../../services/mathCalculations.js';

import './Converter.styles.css';

class Converter extends Component {

    componentDidMount() {
        this.props.selectAbbreviationOfConvertibleCurrency(this.props.storageOfCurrencies[0].abbreviation);
    }

    componentWillUnmount() {
        this.props.enterAmountOfConvertibleCurrency('');
    }

    enterAmountOfConvertibleCurrency = amount =>
        this.props.enterAmountOfConvertibleCurrency(amount);

    selectAbbreviationOfConvertibleCurrency = abbreviation =>
        this.props.selectAbbreviationOfConvertibleCurrency(abbreviation);

    getResultOfConversion() {
        let currencySelected = {};
        this.props.storageOfCurrencies.forEach(currency => {
            if (currency.abbreviation === this.props.abbreviationOfConvertibleCurrency) {
                currencySelected = currency;
            }
        });
        return convertCurrency(
            this.props.amountOfConvertibleCurrency,
            this.props.selectedCurrency.rate,
            this.props.selectedCurrency.scale,
            currencySelected.rate,
            currencySelected.scale,
        );
    }

    renderDropDownList() {
        return this.props.storageOfCurrencies.map(currency => (
            <option
                key={currency.id}
                value={currency.abbreviation}
            >
                {currency.abbreviation}
            </option>
        ));
    }

    render() {
        return (
            <div className="converter currencies-information__converter">
                <ConverterInput
                    enterAmountOfConvertibleCurrency={this.enterAmountOfConvertibleCurrency}
                    selectedCurrency={this.props.selectedCurrency.abbreviation}
                />
                <ConverterOutput
                    selectAbbreviationOfConvertibleCurrency={this.selectAbbreviationOfConvertibleCurrency}
                    renderDropDownList={this.renderDropDownList()}
                    getResultOfConversion={this.getResultOfConversion()}
                />
            </div>
        );
    }

}

export default Converter;
