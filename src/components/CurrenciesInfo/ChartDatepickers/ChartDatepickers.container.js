import {connect} from 'react-redux';

import {getStartDate} from '../../../actions';
import {getEndDate} from '../../../actions';
import {ChartDatepickers} from './ChartDatepickers.component.js';

const mapStateToProps = (state) => {
    return {
        startDate: state.getPeriodDate.startDate,
        endDate: state.getPeriodDate.endDate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartDateChange: (target) => dispatch(getStartDate(target)),
        onEndDateChange: (target) => dispatch(getEndDate(target)),
    };
};

export const ConnectChartDatepickers = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartDatepickers);