import React, {Component} from 'react';

import {convertCurrency} from "../../../services/mathCalculations";
import './ConverterOutput.styles.css';

export class ConverterOutput extends Component {

    componentDidUpdate(previousProps) {
        if (previousProps.currenciesBase !== this.props.currenciesBase) {
            this.props.onOutputCurrencyChange(this.props.currenciesBase[0].Abbreviation);
        }
    };

    handleOutputCurrencyChange = (event) =>
        this.props.onOutputCurrencyChange(event.target.value);

    createDropDownList() {
        return this.props.currenciesBase.map(function (item) {
            return (
                <option
                    key={item.Id}
                    value={item.Abbreviation}
                >
                    {item.Abbreviation}
                </option>
            );
        });
    }

    getConvertibleAmount() {
        let currencySelected = {};

        this.props.currenciesBase.forEach((currency) => {
            if (currency.Abbreviation === this.props.abbreviationCurrency) {
                currencySelected = currency;
            }
        });

        return convertCurrency(
            this.props.amountCurrency,
            this.props.currencySelected.Rate,
            this.props.currencySelected.Scale,
            currencySelected.Rate,
            currencySelected.Scale
        );
    }

    render() {
        return (
            <form className='converter-output converter__form-output'>
                <div className="converter-output__value">
                    Destination
                </div>
                <input
                    className="converter-output__field"
                    type="number"
                    placeholder={`${this.getConvertibleAmount() ? this.getConvertibleAmount() : 'Result'}`}
                    disabled
                />
                <select
                    className="converter-output__select"
                    onChange={this.handleOutputCurrencyChange}
                >
                    {this.createDropDownList()}
                </select>
            </form>
        );
    };

}