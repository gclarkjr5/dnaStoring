import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initialState from './store/initialState.json';
import store from './store/store';

const storeInstance = store(initialState);

ReactDOM.render(
    // Wrap root in react-redux provider and pass the store in as a prop
    <Provider store={storeInstance}>
        <App />
    </Provider >,
    document.getElementById('root'));
registerServiceWorker();
