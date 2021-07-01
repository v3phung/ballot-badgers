import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducer } from '../reducers/election';

export const electionStore = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
);