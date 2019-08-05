import { connect } from 'react-redux';

import CurrenciesPickerSearch from './CurrenciesPickerSearch.component.js';
import { enterCurrency } from '../../../actions';

const mapStateToProps = state => ({
    enteredCurrency: state.common.enteredCurrency,
});

const mapDispatchToProps = dispatch => ({
    enterCurrency: target => dispatch(enterCurrency(target)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CurrenciesPickerSearch);
