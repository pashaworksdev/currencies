import { combineReducers } from 'redux';

import common from './common.reducer.js';
import converter from './converter.reducer.js';
import favorite from './favorite.reducer.js';

export default combineReducers({
    common,
    converter,
    favorite,
});
