import { combineReducers } from "redux";

import {
    REFRESH_VOTERS_DONE_ACTION
} from "../actions/ballot-badgers";

export const votersReducer = (voters = [], action) => {
    if (action.type === REFRESH_VOTERS_DONE_ACTION) {
        return action.voters;
    } else {
        return voters;
    }
};

export const ballotBadgersReducer = combineReducers({
    voters: votersReducer,
});