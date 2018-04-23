import { combineReducers, createStore, appplyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reduxPromise from 'redux-promise';
import { persistStore } from 'redux-persist';
import reducers from './actions';


export default createStore;