import { useHistory } from "react-router-dom";

export const Success = () => {
  const history = useHistory();
  const navToHome = () => {
    history.push('/');
  };

  return (
    <>
      <h1>Congratulations! Your vote has been counted.</h1>
      <h3>Thanks for doing your share :D</h3>
      <button type="button" onClick={navToHome}>Go Home</button>
    </>
  );
};