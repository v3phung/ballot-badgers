export const REFRESH_VOTERS_REQUEST_ACTION = "REFRESH_VOTERS_REQUEST";
export const REFRESH_VOTERS_DONE_ACTION = "REFRESH_VOTERS_DONE";

export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER_REQUEST';

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