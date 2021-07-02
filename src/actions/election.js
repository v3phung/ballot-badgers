export const GET_ELECTION_REQUEST_ACTION = 'GET_ELECTION_REQUEST';
export const GET_ELECTION_DONE_ACTION = 'GET_ELECTION_DONE';

export const GET_ELECTIONS_REQUEST_ACTION = 'GET_ELECTIONS_REQUEST';
export const GET_ELECTIONS_DONE_ACTION = 'GET_ELECTIONS_DONE';

export const ADD_ELECTION_REQUEST_ACTION = 'ADD_ELECTION_REQUEST';
export const ADD_ELECTION_DONE_ACTION = 'ADD_ELECTION_DONE';

export const SUBMIT_BALLOT_REQUEST_ACTION = 'SUBMIT_BALLOT_REQUEST';
export const SUBMIT_BALLOT_DONE_ACTION = 'SUBMIT_BALLOT_DONE';

export const ADD_ELECTION_QUESTION_ACTION = "ADD_ELECTION_QUESTION";
export const GET_ELECTION_ID_ACTION = "GET_ELECTION_ID";

export const createAddElectionQuestionAction = (question) =>
  ({ type: ADD_ELECTION_QUESTION_ACTION, question });

export const createGetElectionIdAction = (electionId) =>
  ({ type: GET_ELECTION_ID_ACTION, electionId });

export const createGetElectionRequestAction = () =>
  ({ type: GET_ELECTION_REQUEST_ACTION });

export const createGetElectionDoneAction = (election) =>
  ({ type: GET_ELECTION_DONE_ACTION, election });

export const getElection = (id) => {

  return (dispatch) => {
    dispatch(createGetElectionRequestAction());

    return fetch("http://localhost:3060/elections/" + encodeURIComponent(id))
      .then(res => res.json())
      .then(elections => dispatch(createGetElectionDoneAction(elections)));
  };
};

export const getElections = () => {

  return (dispatch) => {
    dispatch(createGetElectionsRequestAction());

    return fetch("http://localhost:3060/elections")
      .then(res => res.json())
      .then(elections => dispatch(createGetElectionsDoneAction(elections)));
  };
};

export const addElection = election => {
  return dispatch => {
    dispatch(createAddElectionRequestAction());

    return fetch("http://localhost:3060/elections", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(election),
    })
      .then(() => dispatch(getElections()));
  };

}

export const createAddElectionRequestAction = () =>
  ({ type: ADD_ELECTION_REQUEST_ACTION });

export const createAddElectionRequestDone = () =>
  ({ type: ADD_ELECTION_DONE_ACTION });

export const createGetElectionsRequestAction = () =>
  ({ type: GET_ELECTIONS_REQUEST_ACTION });

export const createGetElectionsDoneAction = (elections) =>
  ({ type: GET_ELECTIONS_DONE_ACTION, elections });

export const createSubmitBallotRequestAction = () =>
  ({ type: GET_ELECTIONS_REQUEST_ACTION });

export const createSubmitBallotDoneAction = (ballot) =>
  ({ type: GET_ELECTIONS_DONE_ACTION, ballot });

export const submitBallot = (ballot) => {

  return (dispatch) => {
    dispatch(createSubmitBallotRequestAction());

    return fetch("http://localhost:3060/elections", { //what path to use??
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ballot)

    }).then(res => res.json())
      .then(ballot => dispatch(createSubmitBallotDoneAction(ballot)));
  };
};

