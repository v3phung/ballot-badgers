import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { electionReducer } from '../reducers/election';

export const electionStore = createStore(
    electionReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);