import { VoterForm } from "../components/VoterForm";
import { ToolHeader } from "../components/ToolHeader";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { addVoter } from "../actions/voters";

export const VoterFormContainer = () => {
    const dispatch = useDispatch();

    const voterFormActions = useMemo(() => bindActionCreators({
        onSubmitVoter: addVoter,
    }, dispatch), [dispatch]);


    return (
        <>
          <ToolHeader toolHeader="Registration Voter Form"/>
          <VoterForm {...voterFormActions} />
        </>
    );
};