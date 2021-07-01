import { useState } from 'react';

export const useElectionForm = (initialForm) => {
    const [form, setForm] = useState({ ...initialForm });
    const change = e => {
        setForm({
            ...form,
            [e.target.name]: [e.target.value],
        });
    };

    const addQuestion = () => {
        const newQuestionList = [
            ...form.questions,
            {
                id: Math.max(...form.questions.map(q => q.id), 0) + 1,
                text: form.currentQuestion,
                yesVotes: 0
            }
        ]
        setForm({
            ...form,
            currentQuestion: "",
            questions: [...newQuestionList]
        })
    }

    const createElection = () => {
        setForm({})
    }


    const resetForm = () => setForm({ ...initialForm });

    return [form, change, resetForm, addQuestion];
};