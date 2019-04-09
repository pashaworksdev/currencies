import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import {configureStore} from './store/configureStore.js';
import {CurrentPage} from './components/CurrentPage';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <CurrentPage/>
        </HashRouter>
    </Provider>
), document.getElementById('root'));