import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import loginReducer from './loginReducer';
import settingsReducer from './settingsReducer';
import sideBarReducer from './sideBarReducer';

const rootReducer = combineReducers ({
  eventReducer,
  loginReducer,
  settingsReducer,
  sideBarReducer
})

export default rootReducer;