import {connect} from 'react-redux';

import {getCurrencyForPeriod} from '../../../actions';
import {ChartMain} from './ChartMain.component.js';

const mapStateToProps = (state) => {
    return {
        currencySelected: state.chooseCurrency.currencySelected,
        startDate: state.getPeriodDate.startDate,
        endDate: state.getPeriodDate.endDate,
        data: state.getCurrencies.currencyForPeriod
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrencies: (id, startDate, endDate) => dispatch(getCurrencyForPeriod(id, startDate, endDate))
    };
};

export const ConnectChartMain = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartMain);