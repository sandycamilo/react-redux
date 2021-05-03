import { combineReducers } from 'redux';

import timerReducer from './timersReducer';
import selectedTimeReducer from './selectedTimeReducer';

export default combineReducers({
  timers: timerReducer,              // array
  selectedTimer: selectedTimeReducer, // int/number
});