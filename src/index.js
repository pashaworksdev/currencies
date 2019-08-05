import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import CurrentPage from './components/Common/CurrentPage';
import configureStore from './store/configureStore.js';

import './styles/common.styles.scss';

const store = configureStore();

const render = () => {
    ReactDOM.render((
        <Provider store={store}>
            <Router>
                <CurrentPage />
            </Router>
        </Provider>
    ), document.getElementById('root'));
};

render();

if (module.hot) {
    module.hot.accept('./components/Common/CurrentPage', render);
}
