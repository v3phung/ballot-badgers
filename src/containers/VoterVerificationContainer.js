import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useMemo } from "react";
import { verifyVoter } from "../actions/voters";
import { useParams } from "react-router-dom";
import { Ballot } from "../components/Ballot";

import { VoterVerificationForm } from "../components/VoterVerificationForm";

export const VoterVerificationContainer = () => {
  const { electionId } = useParams();

  const { voterId, errorMessage } = useSelector((state) => state);

  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          onVerifyVoter: verifyVoter,
        },
        dispatch
      ),
    [dispatch]
  );

  useEffect(() => {}, [dispatch]);

  return voterId > 0 && !errorMessage ? (
    <Ballot electionId={electionId} />
  ) : (
    <VoterVerificationForm
      electionId={electionId}
      errorMessage={errorMessage}
      onVerifyVoter={actions.onVerifyVoter}
    />
  );
};
