import { useMemo, useEffect } from 'react';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from 'react-redux';

import {
  createEditVoterAction, createCancelVoterAction,
  refreshVoters, deleteVoter, updateVoter, createSortVoterTypeAction
} from "../actions/voters";

import { VotersList } from "../components/VotersList";
import { ToolHeader } from "../components/ToolHeader";

export const VotersListContainer = () => {

  const voters = useSelector(state => state.voters);
  const editVoterId = useSelector(state => state.editVoterId);
  const voterSortValue = useSelector(state => state.voterSortValue);


  const sortStringColumns = () => {
    let sortedList = []
    voterSortValue.sortDirection === "up" ?
      sortedList = [...voters].sort((a, b) => (String(a[voterSortValue.column]).toLowerCase() > String(b[voterSortValue.column]).toLowerCase()) ? 1 : -1) :
      sortedList = [...voters].sort((a, b) => (String(a[voterSortValue.column]).toLowerCase() < String(b[voterSortValue.column]).toLowerCase()) ? 1 : -1)
    return [...sortedList]
  }


  const dispatch = useDispatch();

  const voterListActions = useMemo(() => bindActionCreators({
    onEditVoter: createEditVoterAction,
    onDeleteVoter: deleteVoter,
    onUpdateVoter: updateVoter,
    onCancelVoter: createCancelVoterAction,
    onSetVoterSort: createSortVoterTypeAction,
  }, dispatch), [dispatch])


  useEffect(() => {
    dispatch(refreshVoters());
  }, [dispatch]);

  return (
    <>
      <ToolHeader toolHeader="Registered Voters List" />
      <VotersList voters={sortStringColumns()} voterSortValue={voterSortValue} editVoterId={editVoterId} {...voterListActions} />
    </>

  );
};