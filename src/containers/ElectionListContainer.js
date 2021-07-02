import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { getElections, createGetElectionIdAction } from '../actions/election';
import { ElectionList } from '../components/ElectionList';
export const ElectionListContainer = () => {
    const elections = useSelector(state => state.elections)
    const electionId = useSelector(state => state.electionId);
    const selectedElection = elections.find(e => e.id === electionId);
    const dispatch = useDispatch();

    const electionFormActions = useMemo(() => bindActionCreators({
        onSetElectionId: createGetElectionIdAction
    }, dispatch), [dispatch])

    useEffect(() => {
        dispatch(getElections());
    }, [dispatch])

    return (
        < ElectionList elections={elections} selectedElection={selectedElection} {...electionFormActions} />
    )


}