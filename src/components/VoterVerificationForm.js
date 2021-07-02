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
    <form>
      <ToolHeader title="Please enter voter id to verify." />
      <div className="view-block">
        <label htmlFor="lastName-input-verify">Voter Id: </label>
        <input
          type="text"
          id="lastName-input-verify"
          name="voterId"
          value={form.voterId}
          onChange={change}
        />
        <div className="error">
          {errorMessage && <span>{errorMessage}</span>}
        </div>

        <div>
          <button
            type="button"
            onClick={() => onVerifyVoter(form.voterId, electionId)}
          >
            Verify
          </button>
        </div>
      </div>
    </form>
  );
};
