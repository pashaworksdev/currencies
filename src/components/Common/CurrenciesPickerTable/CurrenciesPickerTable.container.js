import { connect } from 'react-redux';

import CurrenciesPickerTable from './CurrenciesPickerTable.component.js';
import { getStorageOfCurrencies, selectCurrency } from '../../../actions';

const mapStateToProps = state => ({
    storageOfCurrencies: state.common.storageOfCurrencies,
    enteredCurrency: state.common.enteredCurrency,
    selectedCurrency: state.common.selectedCurrency,
});

const mapDispatchToProps = dispatch => ({
    getStorageOfCurrencies: () => dispatch(getStorageOfCurrencies()),
    selectCurrency: target => dispatch(selectCurrency(target)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CurrenciesPickerTable);
