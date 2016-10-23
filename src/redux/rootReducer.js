import { combineReducers } from 'redux';

import lessons from './modules/lessons';

const rootReducer = combineReducers({
    lessons
});

export default rootReducer;
