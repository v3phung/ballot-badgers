import { useHistory } from "react-router-dom";

import { ToolHeader } from "./ToolHeader";

export const ElectionList = ({
  elections,
  selectedElection,
  onSetElectionId: setElectionId,
}) => {
  const history = useHistory();
  const navToVerifyVoter = (electionId) => {
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
                  <button
                    type="button"
                    onClick={() => navToVerifyVoter(e.id, 2)}
                  >
                    Vote Now
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => setElectionId(e.id)}>
                    View Results
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {selectedElection ? (
        <div>
          <div>
            <ToolHeader title={selectedElection.name + " Election Results"} />
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Yes</th>
                  <th>No</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {selectedElection.questions?.map((q) => (
                  <tr key={q.id}>
                    <td>{q.text}</td>
                    <td>{q.yesVotes}</td>
                    <td>{selectedElection.voterIds.length - q.yesVotes}</td>
                    <td>{selectedElection.voterIds.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>No Result Selected</div>
      )}
    </>
  );
};
