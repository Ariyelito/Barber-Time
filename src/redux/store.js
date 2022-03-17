import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import barberReducer from './reducers/barberReducer';
import clientReducer from './reducers/clientReducer';


const rootReducer = combineReducers({
    barber : barberReducer,
    client : clientReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk))

export default createStore(
    rootReducer,
    middleware
  );