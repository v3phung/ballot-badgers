import { combineReducers } from 'redux';

import {
  GET_ELECTION_REQUEST_ACTION, GET_ELECTION_DONE_ACTION,
  GET_ELECTIONS_REQUEST_ACTION, GET_ELECTIONS_DONE_ACTION,
  SUBMIT_BALLOT_REQUEST_ACTION, SUBMIT_BALLOT_DONE_ACTION
} from '../actions/election';

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

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.carId;
  }

  if ([
    ADD_CAR_DONE_ACTION, SAVE_CAR_DONE_ACTION,
    DELETE_CAR_DONE_ACTION, CANCEL_CAR_ACTION
  ].includes(action.type)) {
    return -1;
  }

  return editCarId;
};

export const Reducer = combineReducers({
  elections: electionsReducer,
});