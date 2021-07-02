import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useElection } from "../hooks/useElection";

export const Ballot = ({ electionId }) => {
  //useState only for local form checkboxes
  const [form, setForm] = useState({}); // form as obj keyed by question.id
  const updateForm = (id, val) => {
    setForm({
        ...form,
        [id]: val
    });
  };

  const { elections, voterId, submitBallot } = useElection();
  const election = elections.find((e) => e.id === Number(electionId));

  const history = useHistory();
  const wrappedSubmit = (electionId, voterId, form) => {
    submitBallot(electionId, voterId, form);
    history.push('/success');
  };


  return (
    <div>
      <h2>Ballot Questions: {election && election.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Vote Yes?</th>
          </tr>
        </thead>
        <tbody>
          {election &&
            election.questions.map((q) => (
              <tr key={q.id}>
                <td>{q.text}</td>
                <td>
                <input type="checkbox" value={form[q.id]}
                  onChange={(e) => updateForm(q.id, e.target.checked)}/>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button type="button" onClick={() => wrappedSubmit(election.id, voterId, form)}>
        Cast Vote
      </button>
    </div>
  );
};