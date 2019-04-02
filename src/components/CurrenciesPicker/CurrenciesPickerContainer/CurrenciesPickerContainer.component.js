import React, {Component} from 'react';
import {CurrenciesPickerSearch} from '../CurrenciesPickerSearch';
import {CurrenciesPickerTable} from '../CurrenciesPickerTable';
import './CurrenciesPickerContainer.styles.css';

export class CurrenciesPickerContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencyInput: ''
        };
    };

    handleCurrencyInputChange = (currencyInput) =>
        this.setState({currencyInput: currencyInput});

    render() {
        return (
            <div className="currencies-picker currencies__currencies-picker">
                <CurrenciesPickerSearch
                    currencyInput={this.state.currencyInput}
                    onCurrencyInputChange={this.handleCurrencyInputChange}
                />
                <CurrenciesPickerTable
                    currencyInput={this.state.currencyInput}
                    currenciesBase={this.props.currenciesBase}
                    currencySelected={this.props.currencySelected}
                    OnCurrencySelectedClick={this.props.OnCurrencySelectedClick}
                />
            </div>
        );
    };

}
