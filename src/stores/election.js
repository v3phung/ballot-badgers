import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { Reducer } from '../reducers/election';

export const electionStore = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(thunk)),
);