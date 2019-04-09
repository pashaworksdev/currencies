import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './ChartDatepickers.styles.css';

export const ChartDatepickers = (props) => {

    const handleStartDateChange = (date) =>
        props.onStartDateChange(date);

    const handleEndDateChange = (date) =>
        props.onEndDateChange(date);

    return (
        <div className="chart-container__datepicker">
            <div className="datepicker__name">
                Start Date:
            </div>
            <DatePicker
                selected={props.startDate}
                onSelect={handleStartDateChange}
                maxDate={new Date()}
                dropdownMode="select"
            />
            <div className="datepicker__name">
                End Date:
            </div>
            <DatePicker
                selected={props.endDate}
                onChange={handleEndDateChange}
                maxDate={new Date()}
                dropdownMode="select"
            />
        </div>
    );

};
