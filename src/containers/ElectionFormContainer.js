import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { addElection, createAddElectionQuestionAction } from '../actions/election';
import { ElectionForm } from '../components/ElectionForm';

export const ElectionFormContainer = () => {

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions)
    const electionFormActions = useMemo(() => bindActionCreators({
        onAddElection: addElection,
        onAddQuestion: createAddElectionQuestionAction,
    }, dispatch), [dispatch])

    return (
        <ElectionForm questions={questions} {...electionFormActions} />
    )


}