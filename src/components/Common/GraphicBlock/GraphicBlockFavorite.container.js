import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GraphicBlock from './GraphicBlock.component.js';
import { getChangesCurrencyForPeriod, setStartDate, setEndDate } from '../../../actions';

const mapStateToProps = state => ({
    selectedCurrency: state.favorite.selectedFavoriteCurrency,
    startDate: state.common.startDate,
    endDate: state.common.endDate,
    changesCurrencyForPeriod: state.common.changesCurrencyForPeriod,
});

const mapDispatchToProps = dispatch => ({
    setStartDate: startDate =>
        dispatch(setStartDate(startDate)),
    setEndDate: endDate =>
        dispatch(setEndDate(endDate)),
    getChangesCurrencyForPeriod: (id, startDate, endDate) =>
        dispatch(getChangesCurrencyForPeriod(id, startDate, endDate)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(GraphicBlock));
