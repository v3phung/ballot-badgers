import { useForm } from '../hooks/useForm';

export const ElectionForm = () => {

    return (
        <>
            <div>I am the election form</div>
            <form>
                <div>
                    <label htmlFor='name-input'>Election Name</label>
                    <input type='text' id='name-input'></input>
                </div>
                <div>
                    <label htmlFor='question-input'>Add Question</label>
                    <input type='text' id='question-input'></input>
                </div>
                <button type='button'>Submit</button>
            </form>
        </>

    )
};