export const REFRESH_VOTERS_REQUEST_ACTION = "REFRESH_VOTERS_REQUEST";
export const REFRESH_VOTERS_DONE_ACTION = "REFRESH_VOTERS_DONE";
export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER_REQUEST';
export const UPDATE_VOTER_REQUEST_ACTION = 'UPDATE_VOTER_REQUEST';
export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const DELETE_VOTER_ACTION = 'DELETE_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';

export const createRefreshVotersRequestAction = () =>
    ({type: REFRESH_VOTERS_REQUEST_ACTION});

export const createRefreshVotersDoneAction = (voters) =>
    ({type: REFRESH_VOTERS_DONE_ACTION, voters});

export const refreshVoters = () => {
    return dispatch => {
        dispatch(createRefreshVotersRequestAction());

        return fetch("http://localhost:3060/voters")
            .then(res => res.json())
            .then(voters => dispatch(createRefreshVotersDoneAction(voters)));
    };
};

export const createAddVoterRequestAction = () =>
    ({type: ADD_VOTER_REQUEST_ACTION});

export const addVoter = voter => {
    return dispatch => {
        dispatch(createAddVoterRequestAction());

        return fetch("http://localhost:3060/voters", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(voter)
        }).then(() => dispatch(refreshVoters()));
    }
};

export const createEditVoterAction = voterId => ({
    type: EDIT_VOTER_ACTION,
    voterId,
});

export const createDeleteVoterRequestAction = () =>
    ({type: DELETE_VOTER_ACTION});

export const deleteVoter = voterId => {
    return dispatch => {
        dispatch(createDeleteVoterRequestAction());

        return fetch("http://localhost:3060/voters/" + encodeURIComponent(voterId), {
            method: 'DELETE',
        }).then(() => dispatch(refreshVoters()));
    };
};

export const createUpdateVoterRequestAction = () =>
    ({type: UPDATE_VOTER_REQUEST_ACTION});

export const updateVoter = voter => {
    return dispatch => {
        dispatch(createUpdateVoterRequestAction());

        return fetch("http://localhost:3060/voters/" + encodeURIComponent(voter.id), {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(voter),
        }).then(() => dispatch(refreshVoters()));
    };
};

export const createCancelVoterAction = () =>
    ({type: CANCEL_VOTER_ACTION});
