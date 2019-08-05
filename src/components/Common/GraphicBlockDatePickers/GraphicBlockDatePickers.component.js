import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './GraphicBlockDatePickers.styles.scss';

const GraphicBlockDatePickers = props => {

    const changeStartDate = date =>
        props.changeStartDate(date);

    const changeEndDate = date =>
        props.changeEndDate(date);

    return (
        <div className="datepicker chart-container__datepicker">
            <div className="datepicker__name">
                { 'Start date:' }
                <DatePicker
                    selected={props.startDate}
                    onChange={changeStartDate}
                    maxDate={moment().toDate()}
                    dropdownMode="select"
                />
            </div>
            <div className="datepicker__name">
                { 'End date:' }
                <DatePicker
                    selected={props.endDate}
                    onChange={changeEndDate}
                    minDate={moment(props.startDate).toDate()}
                    maxDate={moment().toDate()}
                    dropdownMode="select"
                />
            </div>
        </div>
    );
};

export default GraphicBlockDatePickers;
