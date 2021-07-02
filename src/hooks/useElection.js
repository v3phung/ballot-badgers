import { useEffect, useMemo } from "react";

import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { getElections, submitBallot } from "../actions/election";

export const useElection = () => {
  const elections = useSelector((state) => state.elections);
  const voterId = useSelector((state) => state.voterId);

  const dispatch = useDispatch();
  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          getElections: getElections,
          submitBallot: submitBallot,
        },
        dispatch
      ),
    [dispatch]
  );

  useEffect(() => {
    actions.getElections();
  }, [actions]);

  return {
    elections,
    voterId,
    ...actions,
  };
};
