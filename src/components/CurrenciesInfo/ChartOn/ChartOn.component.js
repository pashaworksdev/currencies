import React, {Component} from 'react';
import {ChartDatepickers} from "../ChartDatepickers";
import {ChartMain} from "../ChartMain";
import {gettingCurrencies} from "../../../services/gettingCurrencies";
import './ChartOn.styles.css';

export class ChartOn extends Component {

    constructor(props) {
        super(props);

        let startDate = new Date();
        startDate.setDate(startDate.getDate() - 30);

        this.state = {
            startDate: startDate,
            endDate: new Date(),
            data: []
        }
    };

    componentDidMount() {
        gettingCurrencies.getCurrencyForPeriod(this.props.currencySelected.Id, this.state.startDate, this.state.endDate)
            .then((result) => this.setState({data: result}));
    };

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.currencySelected !== this.props.currencySelected ||
            previousState.startDate !== this.state.startDate ||
            previousState.endDate !== this.state.endDate) {
            gettingCurrencies.getCurrencyForPeriod(this.props.currencySelected.Id, this.state.startDate, this.state.endDate)
                .then((result) => this.setState({data: result}));
        }
    }

    handleStartDateChange = (date) =>
        this.setState({startDate: date});

    handleEndDateChange = (date) =>
        this.setState({endDate: date});

    render() {
        return (
            <div className="chart-container currencies-information__chart-container">
                <ChartDatepickers
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onStartDateChange={this.handleStartDateChange}
                    onEndDateChange={this.handleEndDateChange}
                />
                <ChartMain
                    data={this.state.data}
                />
            </div>
        );
    };

}
