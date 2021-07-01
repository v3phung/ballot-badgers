import { useState } from "react";
import { useHistory } from "react-router-dom";

import { ToolHeader } from "./ToolHeader";

export const ElectionList = ({ elections }) => {
  const [showResult, setShowResult] = useState(-1);

  const getElection = (id) => {
    const currElection = elections.filter((c) => c.id === id);
    setShowResult(currElection[0]);
  };

  const history = useHistory();
  const navToBallot = (electionId) => {
    history.push(`/elections/${electionId}`);
  };

  return (
    <>
      <ToolHeader title="Active Elections" />
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Vote</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {elections &&
            elections.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>
                  <button type="button" onClick={() => navToBallot(e.id)}>
                    Vote Now
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => getElection(e.id)}>
                    View Results
                  </button>
                </td>
              </tr>
            ))}
        </tbody>

        <tbody>
          {showResult.questions.map((q) => (
            <tr>
              <td>{q.text}</td>
              <td>{q.yesVotes}</td>
              <td>{showResult.voterIds.length - q.yesVotes}</td>
              <td>{showResult.voterIds.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
