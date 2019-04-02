import React from 'react';
import {ChartOn} from "../ChartOn";
import {ChartOff} from "../ChartOff";

export const ChartContainer = (props) => {

    return Object.keys(props.currencySelected).length === 0 ?
        <ChartOff/> : <ChartOn currencySelected={props.currencySelected}/>

};