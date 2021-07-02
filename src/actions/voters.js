export const REFRESH_VOTERS_REQUEST_ACTION = "REFRESH_VOTERS_REQUEST";
export const REFRESH_VOTERS_DONE_ACTION = "REFRESH_VOTERS_DONE";

export const ADD_VOTER_REQUEST_ACTION = "ADD_VOTER_REQUEST";
export const UPDATE_VOTER_REQUEST_ACTION = "UPDATE_VOTER_REQUEST";
export const EDIT_VOTER_ACTION = "EDIT_VOTER";
export const DELETE_VOTER_ACTION = "DELETE_VOTER";
export const CANCEL_VOTER_ACTION = "CANCEL_VOTER";

export const VERIFY_VOTER_REQUEST_ACTION = "VERIFY_VOTER_REQUEST";
export const VERIFY_VOTER_DONE_ACTION = "VERIFY_VOTER_DONE";

export const SORT_VOTER_TYPE_ACTION = "SORT_VOTER_TYPE";

export const createSortVoterTypeAction = (column) => ({
  type: SORT_VOTER_TYPE_ACTION, column
});
export const RESET_VERIFY_VOTER_ACTION = "RESET_VERIFY_VOTER";

export const createRefreshVotersRequestAction = () => ({
  type: REFRESH_VOTERS_REQUEST_ACTION,
});

export const createRefreshVotersDoneAction = (voters) => ({
  type: REFRESH_VOTERS_DONE_ACTION,
  voters,
});

export const refreshVoters = () => {
  return (dispatch) => {
    dispatch(createRefreshVotersRequestAction());

    return fetch("http://localhost:3060/voters")
      .then((res) => res.json())
      .then((voters) => dispatch(createRefreshVotersDoneAction(voters)));
  };
};

export const createAddVoterRequestAction = () => ({
  type: ADD_VOTER_REQUEST_ACTION,
});

export const addVoter = (voter) => {
  return (dispatch) => {
    dispatch(createAddVoterRequestAction());

    return fetch("http://localhost:3060/voters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voter),
    }).then(() => dispatch(refreshVoters()));
  };
};

export const createVerifyVoterRequestAction = () => ({
  type: VERIFY_VOTER_REQUEST_ACTION,
});

export const createVerifyVoterDoneAction = (voterId, errorMessage) => ({
  type: VERIFY_VOTER_DONE_ACTION,
  voterId: voterId,
  errorMessage: errorMessage,
});

export const verifyVoter = (voterId, electionId) => {
  return async (dispatch) => {
    dispatch(createVerifyVoterRequestAction());

    const voterRes = await fetch(
      "http://localhost:3060/voters/" + encodeURIComponent(voterId)
    );
    const voter = await voterRes.json();

    if (voter === undefined || voter.id === undefined) {
      return dispatch(createVerifyVoterDoneAction(-1, "Voter not found"));
    }

    const electionRes = await fetch(
      "http://localhost:3060/elections/" + encodeURIComponent(electionId)
    );
    const election = await electionRes.json();

    if (election.voterIds.includes(voter.id)) {
      const errorMessage =
        voter.firstName +
        ", you already voted to the selected election:" +
        election.name;
      return dispatch(createVerifyVoterDoneAction(voter.id, errorMessage));
    }
    return dispatch(createVerifyVoterDoneAction(voter.id, ""));
  };
};

export const createEditVoterAction = (voterId) => ({
  type: EDIT_VOTER_ACTION,
  voterId,
});

export const createDeleteVoterRequestAction = () => ({
  type: DELETE_VOTER_ACTION,
});

export const deleteVoter = (voterId) => {
  return (dispatch) => {
    dispatch(createDeleteVoterRequestAction());

    return fetch(
      "http://localhost:3060/voters/" + encodeURIComponent(voterId),
      {
        method: "DELETE",
      }
    ).then(() => dispatch(refreshVoters()));
  };
};

export const createUpdateVoterRequestAction = () => ({
  type: UPDATE_VOTER_REQUEST_ACTION,
});

export const updateVoter = (voter) => {
  return (dispatch) => {
    dispatch(createUpdateVoterRequestAction());

    return fetch(
      "http://localhost:3060/voters/" + encodeURIComponent(voter.id),
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(voter),
      }
    ).then(() => dispatch(refreshVoters()));
  };
};

export const createCancelVoterAction = () => ({ type: CANCEL_VOTER_ACTION });

export const createResetVerifyVoterAction = () => ({
  type: RESET_VERIFY_VOTER_ACTION,
});
