import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { refreshVoters } from "../actions/voters";

import { VotersList } from "../components/VotersList";
import {ToolHeader} from "../components/ToolHeader";

export const VotersListContainer = () => {

  const voters = useSelector(state => state.voters);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(refreshVoters());
  }, [dispatch]);

  return (
      <>
        <ToolHeader toolHeader="Registered Voters List" />
        <VotersList voters={voters} />
      </>

  );
};