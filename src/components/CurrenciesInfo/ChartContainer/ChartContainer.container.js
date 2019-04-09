import {connect} from 'react-redux';

import {ChartContainer} from './ChartContainer.component.js';

const mapStateToProps = (state) => {
    return {
        currencySelected: state.chooseCurrency.currencySelected
    };
};

export const ConnectChartContainer = connect(
    mapStateToProps
)(ChartContainer);