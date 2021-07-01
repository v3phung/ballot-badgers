import { combineReducers } from 'redux';

import {
  GET_ELECTION_REQUEST_ACTION, GET_ELECTION_DONE_ACTION,
  GET_ELECTIONS_REQUEST_ACTION, GET_ELECTIONS_DONE_ACTION,
  SUBMIT_BALLOT_REQUEST_ACTION, SUBMIT_BALLOT_DONE_ACTION
} from '../actions/election';

import {
  REFRESH_VOTERS_DONE_ACTION
} from "../actions/voters";

export const votersReducer = (voters = [], action) => {
  if (action.type === REFRESH_VOTERS_DONE_ACTION) {
    return action.voters;
  } else {
    return voters;
  }
};

export const electionsReducer = (elections = [], action) => {
  switch (action.type) {
    case GET_ELECTIONS_DONE_ACTION:
      return action.elections;
    case GET_ELECTION_DONE_ACTION:
      // splice in single election?
      return elections;
    case SUBMIT_BALLOT_DONE_ACTION:
      return action.ballot;
    default:
      return elections;
  }
};

export const reducer = combineReducers({
  elections: electionsReducer,
  voters: votersReducer,
});