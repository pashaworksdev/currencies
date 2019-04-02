import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {CurrentPage} from './components/CurrentPage';

ReactDOM.render((
    <HashRouter>
        <CurrentPage/>
    </HashRouter>
), document.getElementById('root'));