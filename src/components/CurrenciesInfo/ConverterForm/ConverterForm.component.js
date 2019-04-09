import React from 'react';

import {ConnectConverterInput} from "../ConverterInput";
import {ConnectConverterOutput} from "../ConverterOutput";
import './ConverterForm.styles.css';

export const ConverterForm = () => (

    <div className="converter currencies-information__converter">
        <ConnectConverterInput/>
        <ConnectConverterOutput/>
    </div>

);