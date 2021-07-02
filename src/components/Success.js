import { useHistory } from "react-router-dom";

import { ToolHeader } from "./ToolHeader";

export const Success = ({ isVotingSuccess, isEleSuccess }) => {
  const history = useHistory();
  const navToHome = () => {
    history.push("/");
  };

  return (
    <>
      <ToolHeader title={"🎉 Congratulations! 🎉"} />
      <div className="center">
        <img src="/badger.png" />
        {isVotingSuccess ? (
          <div>
            <p>Your vote has been counted. ✔️</p>
            <p>Thanks for doing your share! 💖</p>
          </div>
        ) : isEleSuccess ? (
          <div>
            <p>Election is created and ready for voting. ✔️</p>
          </div>
        ) : (
          <div>
            <p>Your are registered to vote. ✔️</p>
            <p>Every vote counts.</p>
          </div>
        )}
        <button type="button" onClick={navToHome}>
          Go Home
        </button>
      </div>
    </>
  );
};
