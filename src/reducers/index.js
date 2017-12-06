import { combineReducers } from 'redux'
import app from './reducer';
// import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    app
})

export default rootReducer;