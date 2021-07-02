import { useHistory } from "react-router-dom";

export const GET_ELECTION_REQUEST_ACTION = 'GET_ELECTION_REQUEST';
export const GET_ELECTION_DONE_ACTION = 'GET_ELECTION_DONE';

export const GET_ELECTIONS_REQUEST_ACTION = 'GET_ELECTIONS_REQUEST';
export const GET_ELECTIONS_DONE_ACTION = 'GET_ELECTIONS_DONE';

export const ADD_ELECTION_REQUEST_ACTION = 'ADD_ELECTION_REQUEST';
export const ADD_ELECTION_DONE_ACTION = 'ADD_ELECTION_DONE';

export const SUBMIT_BALLOT_REQUEST_ACTION = 'SUBMIT_BALLOT_REQUEST';
export const SUBMIT_BALLOT_DONE_ACTION = 'SUBMIT_BALLOT_DONE';

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

export const createSubmitBallotRequestAction = (electionId, voterId) =>
  ({ type: SUBMIT_BALLOT_REQUEST_ACTION, electionId, voterId });

export const createSubmitBallotDoneAction = (electionId, voterId) =>
  ({ type: SUBMIT_BALLOT_DONE_ACTION, electionId, voterId });

export const submitBallot = (electionId, voterId, ballotForm) => {
  return (dispatch) => {
    //technically don't NEED to pass ids to Request/Done actions, doing so imagining further dev of this project where such params would be valuable
    dispatch(createSubmitBallotRequestAction(electionId, voterId));

    return getElectionHelper(electionId)
      .then(election => {
        //indicate this voter as having voted (shouldn't need to check first if it exists due to verification step)
        election.voterIds.push(voterId);
        //iterate thru ballotForm and update
        Object.keys(ballotForm).forEach(qId => {
          //only consider incrementing count for a question voter yes for
          if(ballotForm[qId]) {
            election.questions.forEach(question => {
              if(question.id === Number(qId)) question.yesVotes++;
            })
          }
        })
        //then PUT it back to server
        return fetch("http://localhost:3060/elections/" + encodeURIComponent(electionId), {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(election),
        })
        //.then(res => res.json())
        .then(() => dispatch(createSubmitBallotDoneAction(electionId, voterId)))
        .then(() => dispatch(getElections()));
        //also need to reset verification now!
      });
  };
};

