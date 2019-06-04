import React, { Component } from 'react';

import GraphicBlockDatePickers from '../GraphicBlockDatePickers';
import GraphicBlockDiagram from '../GraphicBlockDiagram';

import './GraphicBlock.styles.scss';

class GraphicBlock extends Component {

    componentDidMount() {
        this.props.getChangesCurrencyForPeriod(this.props.selectedCurrency.id, this.props.startDate, this.props.endDate);
    }

    componentDidUpdate(previousProps) {
        if (previousProps.selectedCurrency !== this.props.selectedCurrency
            || previousProps.startDate !== this.props.startDate
            || previousProps.endDate !== this.props.endDate) {
            this.props.getChangesCurrencyForPeriod(this.props.selectedCurrency.id, this.props.startDate, this.props.endDate);
        }
    }

    changeStartDate = startDate =>
        this.props.setStartDate(startDate);

    changeEndDate = endDate =>
        this.props.setEndDate(endDate);

    render() {
        if (this.props.location.pathname !== '/converter') {
            return (
                <div className="chart-container currencies-information__chart-container">
                    <GraphicBlockDatePickers
                        startDate={this.props.startDate}
                        endDate={this.props.endDate}
                        changeStartDate={this.changeStartDate}
                        changeEndDate={this.changeEndDate}
                    />
                    <GraphicBlockDiagram
                        changesCurrencyForPeriod={this.props.changesCurrencyForPeriod}
                        selectedCurrency={this.props.selectedCurrency}
                    />
                </div>
            );
        }
        return (
            <div className="chart-container currencies-information__chart-container">
                <GraphicBlockDiagram
                    changesCurrencyForPeriod={this.props.changesCurrencyForPeriod}
                    selectedCurrency={this.props.selectedCurrency}
                />
            </div>
        );
    }

}

export default GraphicBlock;
