import { useForm } from "../hooks/useForm";
import { ToolHeader } from "./ToolHeader";

export const VoterVerificationForm = ({
  electionId,
  errorMessage,
  onVerifyVoter,
}) => {
  const getInitVoterVerificationForm = () => ({
    voterId: "",
  });

  const [form, change] = useForm(getInitVoterVerificationForm());

  return (
    <form className="custom-form">
      <ToolHeader title="Please enter voter id to verify." />
      <div className="form-element">
        <label htmlFor="lastName-input-verify">Voter Id: </label>
        <input
          type="text"
          id="lastName-input-verify"
          name="voterId"
          value={form.voterId}
          onChange={change}
        />
        <div className="form-element error">
          {errorMessage && <span>{errorMessage}</span>}
        </div>

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
