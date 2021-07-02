import { useForm } from "../hooks/useForm";
import { ToolHeader } from "./ToolHeader";

export const ElectionForm = ({
  onAddElection: addElection,
  onAddQuestion: addQuestion,
  questions,
}) => {
  const getInitElectionForm = () => ({
    name: "",
    currentQuestion: "",
  });

  const [electionForm, change, resetElectionForm] = useForm(
    getInitElectionForm()
  );

  const submitElection = () => {
    const finalElectionForm = {
      name: electionForm.name,
      questions: questions,
      voterIds: [],
    };
    addElection(finalElectionForm);
    resetElectionForm();
  };

  return (
    <>
      <ToolHeader title="Create An Election" />
      <div>
        <div className="election-name-disp">
          Election Name: {electionForm.name}
        </div>
        <div className="election-questions-disp">
          <ul>
            {questions.map((c) => (
              <li key={c.id}>{c.text}</li>
            ))}
          </ul>
        </div>
      </div>
      <form className="custom-form">
        <div className="form-element">
          <label htmlFor="name-input">Election Name: </label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={electionForm.name}
            onChange={change}
          ></input>
        </div>
        <div className="form-element">
          <label htmlFor="question-input">Add Question: </label>
          <input
            type="text"
            id="question-input"
            name="currentQuestion"
            onChange={change}
          ></input>
        </div>
        <button
          type="button"
          onClick={() => addQuestion(electionForm.currentQuestion)}
        >
          Add Question
        </button>
        <button type="button" onClick={submitElection}>
          Create Election
        </button>
      </form>
    </>
  );
};
