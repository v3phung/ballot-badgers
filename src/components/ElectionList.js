import { useState } from 'react';
import { useHistory } from 'react-router-dom'

import { ToolHeader } from './ToolHeader';

export const ElectionList = ({ elections }) => {
    const [showResult, setShowResult] = useState(-1);

    const getElection = (id) => {
        const currElection = elections.filter(c => c.id === id);
        setShowResult(currElection[0]);
    }

    const history = useHistory();
    const navToBallot = (electionId, voterId) => {
        history.push(`/elections/${electionId}/voters/${voterId}`);
    };

    return (
        <>
            <ToolHeader title='Active Elections' />
            <table className='custom-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Vote</th>
                        <th>Results</th>
                    </tr>
                </thead>
                <tbody>
                    {elections.map(e => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td><button type='button' onClick={() => navToBallot(e.id, 2)}>Vote Now</button></td>
                            <td><button type='button' onClick={() => getElection(e.id)}>View Results</button></td>
                        </tr>
                    ))}
                </tbody>

            </table>
            {
                showResult !== -1 ?
                    <div>
                        <ToolHeader title={showResult.name + " Election Results"} />
                        <table className='custom-table'>
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Yes</th>
                                    <th>No</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    showResult.questions.map(q => (
                                        <tr>
                                            <td>{q.text}</td>
                                            <td>{q.yesVotes}</td>
                                            <td>{showResult.voterIds.length - q.yesVotes}</td>
                                            <td>{showResult.voterIds.length}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>

                    :
                    null
            }
        </>
    )
};