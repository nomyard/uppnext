import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reduxPromise from 'redux-promise';
import { persistStore } from 'redux-persist';
import actions from './actions';

/***********************
 * TODO:  import all reducers:
 * login, auth, events, invitations
 ***********************/

 const combinedReducers = combineReducers({
   reducer : store.getState()
 });

export default history => {
  const routerHistory = routerMiddleware(history);
  const createStoreWithMiddleware = applyMiddleware(
    routerHistory,
    reduxPromise,
    actions
  )(createStore);

  const store = createStoreWithMiddleware(
    combineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  const persistor = persistStore(store);
  return { persistor, store };
}