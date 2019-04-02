import React, {Component} from 'react';
import {CurrenciesPickerContainer} from '../CurrenciesPicker/CurrenciesPickerContainer';
import {CurrenciesInfoContainer} from '../CurrenciesInfo/CurrenciesInfoContainer';
import {gettingCurrencies} from '../../services/gettingCurrencies.js';
import './Currencies.styles.css';

export class Currencies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currenciesBase: [],
            currencySelected: {}
        };
    };

    componentDidMount() {
        gettingCurrencies.getCurrenciesForDate()
            .then((currenciesBase) => this.setState({currenciesBase: currenciesBase}));
    };

    handleCurrencySelectedClick = (currencySelected) => {
        let currency = this.state.currencySelected === currencySelected ? {} : currencySelected;
        this.setState({currencySelected: currency});
    };

    render() {
        return (
            <div className="currencies main__currencies">
                <CurrenciesPickerContainer
                    currenciesBase={this.state.currenciesBase}
                    currencySelected={this.state.currencySelected}
                    OnCurrencySelectedClick={this.handleCurrencySelectedClick}
                />
                <CurrenciesInfoContainer
                    currenciesBase={this.state.currenciesBase}
                    currencySelected={this.state.currencySelected}
                />
            </div>
        );
    };

}