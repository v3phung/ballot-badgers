import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { addElection } from '../actions/election';
import { ElectionForm } from '../components/ElectionForm';

export const ElectionFormContainer = () => {

    const dispatch = useDispatch();

    const electionFormActions = useMemo(() => bindActionCreators({
        onAddElection: addElection
    }, dispatch), [dispatch])

    return (
        <ElectionForm {...electionFormActions} />
    )


}