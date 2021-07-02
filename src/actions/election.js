import { createResetVerifyVoterAction } from './voters';

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


const getElectionHelper = (id) => {
  return fetch("http://localhost:3060/elections/" + encodeURIComponent(id))
    .then(res => res.json());
}

export const getElection = (id) => {

  return (dispatch) => {
    dispatch(createGetElectionRequestAction());

    return getElectionHelper()
      .then(election => dispatch(createGetElectionDoneAction(election)));
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
  ({ type: SUBMIT_BALLOT_REQUEST_ACTION });

export const createSubmitBallotDoneAction = () =>
  ({ type: SUBMIT_BALLOT_DONE_ACTION });

export const submitBallot = (electionId, voterId, ballotForm) => {
  return (dispatch) => {
    dispatch(createSubmitBallotRequestAction());
    //NOTE: what we're doing here is a bit weird... pulling down API data, modifying it in client and putting it back
    //in real world, there should be an API route (or some other B/E service) that makes a user casting a vote more
    //simple from F/E perspective. and more to the point... this wouldn't be atomic and would allow for race condition
    return getElectionHelper(electionId)
      .then(election => {
        //indicate this voter as having voted (shouldn't need to check first if it exists due to verification step)
        election.voterIds.push(voterId);
        //iterate thru ballotForm's question ids
        Object.keys(ballotForm).forEach(qId => {
          //only consider incrementing count for a question voter yes for
          if(ballotForm[qId]) {
            election.questions.forEach(question => {
              if(question.id === Number(qId)) question.yesVotes++;
            })
          }
        })
        //then PUT it back with API
        return fetch("http://localhost:3060/elections/" + encodeURIComponent(electionId), {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(election),
        })
        .then(() => dispatch(createSubmitBallotDoneAction()))
        .then(() => dispatch(getElections()))
        //TODO:DM - unsure that this is right way to use a sibling file's action
        .then(() => dispatch(createResetVerifyVoterAction()));
      });
  };
};

