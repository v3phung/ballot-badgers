import { useElectionForm } from '../hooks/useElectionForm';
import { ToolHeader } from './ToolHeader';

export const ElectionForm = ({ onAddElection: addElection }) => {
    const getInitElectionForm = () => ({
        name: '',
        currentQuestion: '',
        questions: [],
    })

    const [electionForm, change, resetElectionForm, addQuestion] = useElectionForm(getInitElectionForm());

    const submitElection = () => {
        const finalElectionForm = {
            name: electionForm.name,
            questions: electionForm.questions,
            voterIds: []
        }
        console.log(finalElectionForm);
        addElection(finalElectionForm);
        resetElectionForm();
    }



    return (
        <>
            <ToolHeader title='Create An Election' />
            <div>
                <div className='election-name-disp'>Election Name: {electionForm.name}</div>
                <div className='election-questions-disp'>
                    <ul>
                        {
                            electionForm.questions.map(c => (
                                <li key={c.id}>{c.text}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <form className='custom-form'>
                <div className='form-element'>
                    <label htmlFor='name-input'>Election Name: </label>
                    <input type='text' id='name-input' name="name" value={electionForm.name} onChange={change}></input>
                </div>
                <div>
                    <label htmlFor='question-input'>Add Question: </label>
                    <input type='text' id='question-input' name='currentQuestion' value={electionForm.currentQuestion} onChange={change}></input>
                </div>
                <button type='button' onClick={addQuestion} >Add Question</button>
                <button type='button' onClick={submitElection} >Create Election</button>
            </form>
        </>

    )
};