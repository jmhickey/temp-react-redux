import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { loadGenders } from './actions/genderActions';
import { loadMembers } from './actions/memberActions';
import './styles/styles.css'; //Using Webpack to import CSS files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import App from './components/App';

const store = configureStore();
store.dispatch(loadGenders());
store.dispatch(loadMembers());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
