/* eslint react/jsx-filename-extension: 0 */

import 'babel-register';
import React from 'react';
import { render } from 'react-dom';
import { useStrict } from 'mobx';

import App from './src/App.jsx';
import Store from './src/store.js';

useStrict(true);

const store = new Store(1);

render(<App store={store} />, document.getElementById('root'));

