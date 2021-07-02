import { combineReducers } from "redux";

import {
  GET_ELECTION_DONE_ACTION,
  GET_ELECTIONS_DONE_ACTION,
  SUBMIT_BALLOT_DONE_ACTION,
  ADD_ELECTION_QUESTION_ACTION,
  GET_ELECTION_ID_ACTION,
} from "../actions/election";

import {
  REFRESH_VOTERS_DONE_ACTION,
  EDIT_VOTER_ACTION,
  CANCEL_VOTER_ACTION,
  VERIFY_VOTER_DONE_ACTION,
  RESET_VERIFY_VOTER_ACTION,
} from "../actions/voters";

export const votersReducer = (voters = [], action) => {
  if (action.type === REFRESH_VOTERS_DONE_ACTION) {
    return action.voters;
  } else {
    return voters;
  }
};

export const editVoterReducer = (editVoterId = -1, action) => {
  if (action.type === EDIT_VOTER_ACTION) {
    return action.voterId;
  }

  if ([REFRESH_VOTERS_DONE_ACTION, CANCEL_VOTER_ACTION].includes(action.type)) {
    return -1;
  }

  return editVoterId;
};

export const questionsReducer = (questions = [], action) => {
  switch (action.type) {
    case ADD_ELECTION_QUESTION_ACTION:
      return [
        ...questions,
        {
          id: Math.max(...questions.map((q) => q.id), 0) + 1,
          text: action.question,
          yesVotes: 0,
        },
      ];
    default:
      return questions;
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

export const electionIdReducer = (electionId = -1, action) => {
  if (action.type === GET_ELECTION_ID_ACTION) {
    return action.electionId;
  }
  return electionId;
};
const voterVerificationReducer = (voterId = -1, action) => {
  if (action.type === VERIFY_VOTER_DONE_ACTION) {
    return action.voterId;
  }
  if (action.type === RESET_VERIFY_VOTER_ACTION) {
    return -1;
  }
  return voterId;
};

const errorMessageReducer = (errorMessage = "", action) => {
  if (action.type === VERIFY_VOTER_DONE_ACTION) {
    return action.errorMessage;
  }
  if (action.type === RESET_VERIFY_VOTER_ACTION) {
    return "";
  }
  return errorMessage;
};

export const reducer = combineReducers({
  elections: electionsReducer,
  questions: questionsReducer,
  voters: votersReducer,
  voterId: voterVerificationReducer,
  errorMessage: errorMessageReducer,
  editVoterId: editVoterReducer,
  electionId: electionIdReducer,
});
