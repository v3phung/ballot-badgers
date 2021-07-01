import { useMemo, useEffect } from 'react';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from 'react-redux';

import {createEditVoterAction, createCancelVoterAction,
    refreshVoters, deleteVoter, updateVoter} from "../actions/voters";

import { VotersList } from "../components/VotersList";
import {ToolHeader} from "../components/ToolHeader";

export const VotersListContainer = () => {

  const voters = useSelector(state => state.voters);
  const editVoterId = useSelector(state => state.editVoterId);
  const dispatch = useDispatch();

  const voterListActions = useMemo(() => bindActionCreators({
      onEditVoter: createEditVoterAction,
      onDeleteVoter: deleteVoter,
      onUpdateVoter: updateVoter,
      onCancelVoter: createCancelVoterAction,
      }, dispatch), [dispatch])

  useEffect(() => {
      dispatch(refreshVoters());
  }, [dispatch]);

  return (
      <>
        <ToolHeader toolHeader="Registered Voters List" />
        <VotersList voters={voters} editVoterId={editVoterId} {...voterListActions} />
      </>

  );
};