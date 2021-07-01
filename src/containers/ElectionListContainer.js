import { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { getElections } from '../actions/election';
import { ElectionList } from '../components/ElectionList';
export const ElectionListContainer = () => {
    const elections = useSelector(state => state.elections)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getElections());
    }, [dispatch])

    console.log(elections)

    return (
        < ElectionList elections={elections} />
    )


}