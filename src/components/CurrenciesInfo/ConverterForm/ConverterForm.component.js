import React, {Component} from 'react';
import {ConverterInput} from "../ConverterInput";
import {ConverterOutput} from "../ConverterOutput";
import {roundNumber} from "../../../services/mathCalculations.js";
import './ConverterForm.styles.css';

export class ConverterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            converterCurrency: '',
            AbbreviationOutput: '',
        };
    };

    componentDidUpdate(previousProps) {
        if (previousProps.currenciesBase !== this.props.currenciesBase) {
            this.setState({AbbreviationOutput: this.props.currenciesBase[0].Abbreviation});
        }
    };

    handleInputCurrencyChange = (converterCurrency) =>
        this.setState({converterCurrency: converterCurrency});

    handleOutputCurrencyChange = (AbrOutInput) =>
        this.setState({AbbreviationOutput: AbrOutInput});

    render() {
        let currencySelected = {};

        this.props.currenciesBase.forEach((currency) => {
            if (currency.Abbreviation === this.state.AbbreviationOutput) {
                currencySelected = currency;
            }
        });

        let resultConversion = (this.state.converterCurrency * this.props.currencySelected.Rate / this.props.currencySelected.Scale * currencySelected.Scale / currencySelected.Rate);
        resultConversion = roundNumber(resultConversion);

        return (
            <div className="converter currencies-information__converter">
                <ConverterInput
                    currencySelected={this.props.currencySelected}
                    converterCurrency={this.state.converterCurrency}
                    onInputCurrencyChange={this.handleInputCurrencyChange}
                />
                <ConverterOutput
                    currenciesBase={this.props.currenciesBase}
                    converterCurrency={this.state.converterCurrency}
                    onOutputCurrencyChange={this.handleOutputCurrencyChange}
                    result={resultConversion}
                />
            </div>
        );
    };

}