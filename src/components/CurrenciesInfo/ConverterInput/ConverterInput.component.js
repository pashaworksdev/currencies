import React, {Component} from 'react';

import './ConverterInput.styles.css';

export class ConverterInput extends Component {

    componentWillUnmount() {
        this.props.onInputCurrencyChange('');
    }

    handleInputCurrencyChange = (event) =>
        this.props.onInputCurrencyChange(event.target.value);

    render() {
        return (
            <form className='converter-input converter__form-input'>
                <div className="converter-input__value">
                    Value
                </div>
                <input className="converter-input__field"
                       type="number"
                       placeholder="Insert the number"
                       onChange={this.handleInputCurrencyChange}
                />
                <div className="converter-input__currency">
                    {this.props.currencySelected.Abbreviation}
                </div>
            </form>
        );
    };

}