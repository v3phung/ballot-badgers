import { useHistory } from "react-router-dom";

import { ToolHeader } from "./ToolHeader";

export const Success = () => {
  const history = useHistory();
  const navToHome = () => {
    history.push('/');
  };

  return (
    <>
      <ToolHeader title={"🎉 Congratulations! 🎉"} />
      <div className="center">
        <img src="/badger.png" />
        <p>Your vote has been counted. ✔️</p>
        <p>Thanks for doing your share! 💖</p>
        <button type="button" onClick={navToHome}>Go Home</button>
      </div>
    </>
  );
};