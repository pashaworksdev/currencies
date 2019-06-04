import { connect } from 'react-redux';

import Converter from './Converter.component.js';
import { enterAmountOfConvertibleCurrency, selectAbbreviationOfConvertibleCurrency } from '../../../actions';

const mapStateToProps = state => ({
    storageOfCurrencies: state.common.storageOfCurrencies,
    amountOfConvertibleCurrency: state.converter.amountOfConvertibleCurrency,
    abbreviationOfConvertibleCurrency: state.converter.abbreviationOfConvertibleCurrency,
    selectedCurrency: state.common.selectedCurrency,
});

const mapDispatchToProps = dispatch => ({
    enterAmountOfConvertibleCurrency: target =>
        dispatch(enterAmountOfConvertibleCurrency(target)),
    selectAbbreviationOfConvertibleCurrency: target =>
        dispatch(selectAbbreviationOfConvertibleCurrency(target)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Converter);
