import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ballotBadgersReducer } from '../reducers/ballot-badgers';

export const ballotBadgersStore = createStore(
    ballotBadgersReducer,
    composeWithDevTools(applyMiddleware(thunk))
);