import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './redux';

import createHistory from 'history/createBrowserHistory';
import {BrowserRouter as Router} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import {PersistGate} from 'redux-persist/es/integration/react';
import 'semantic-ui-css/semantic.min.css';

import App from './App';

const history = createHistory();
const {store, persistor} = createStore(history);

ReactDOM.render(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <Router history={history}>
      <App/>
    </Router>
  </PersistGate>
</Provider>, document.getElementById('root'));
