import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import counterStore from './store/counter-store';
import countStore from './store/counter-store-toolkit';

ReactDOM.render(
    <Provider store={counterStore}>
        <App />
    </Provider>
    
, document.getElementById('root'));




    <Provider store={countStore}>
        <App />
    </Provider>