import { useState } from 'react';

export const ElectionList = ({ elections }) => {
    const [showResult, setShowResult] = useState(-1);

    const getElection = (id) => {
        const currElection = elections.filter(c => c.id === id);
        setShowResult(currElection[0]);
    }

    return (
        <>
            <div>Election List</div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Results</th>
                </tr>
                {elections.map(e => (
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td><button type='button' onClick={() => { getElection(e.id) }}>View Results</button></td>
                    </tr>
                ))}
            </table>

            {
                showResult !== -1 ?
                    <div>
                        <h1>{showResult.name} Results</h1>
                        <table>
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
                                            <td>{q.yesCnt}</td>
                                            <td>{showResult.voterIds.length - q.yesCnt}</td>
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