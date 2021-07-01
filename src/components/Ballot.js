import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { useElection } from '../hooks/useElection';

export const Ballot = () => {
    const { electionId, voterId } = useParams();
    // use id to get specific election
    // maintain "form" state directly in component?
    // if so... is array of bools?
    const [form, setForm] = useState({});// form as obj keyed by question.id

    const {elections, submitBallot} = useElection();
    const election = elections[electionId];

    return (
        <div>
            <h2>Ballot Questions: {election && election.name}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Text</th>
                        <th>Yes?</th>
                    </tr>
                </thead>
                <tbody>
                    {election && election.questions.map(q => (
                        <tr key={q.id}>
                            <td>{q.text}</td>
                            <td><input type="checkbox" value={form[q.id]} onChange={() => setForm()}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" onClick={() => submitBallot(form)}>Submit Ballot</button>
        </div>
    );

};