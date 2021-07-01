import { useState } from 'react';

export const useForm = (initialForm) => {
    const [form, setForm] = useState({ ...initialForm });

    const change = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const resetForm = () => setForm({ ...initialForm });

    return [form, change, resetForm];
};