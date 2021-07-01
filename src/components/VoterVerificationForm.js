import { useForm } from "../hooks/useForm";

export const VoterVerificationForm = ({
  electionId,
  errorMessage,
  onVerifyVoter,
}) => {
  const getInitVoterVerificationForm = () => ({
    voterId: "",
  });

  //   const verifyVoter = () => {
  //     // todo, call Verify voter

  //     resetForm();
  //   };

  const [form, change, resetForm] = useForm(getInitVoterVerificationForm());

  return (
    <form>
      <div>
        Please enter your info to verify. {electionId}, Election {electionId}
      </div>
      <div>
        <label htmlFor="lastName-input-verify">Voter Id: </label>
        <input
          type="text"
          id="lastName-input-verify"
          name="voterId"
          value={form.voterId}
          onChange={change}
        />
      </div>
      <div>{errorMessage && <span>{errorMessage}</span>}</div>
      <div>
        <button
          type="button"
          onClick={() => onVerifyVoter(form.voterId, electionId)}
        >
          Verify
        </button>
      </div>
    </form>
  );
};
