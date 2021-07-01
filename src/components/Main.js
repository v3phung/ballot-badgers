import { useHistory } from 'react-router-dom';

export const Main = () => {
    const history = useHistory();
    return (
        <div>
            <button
                type="button"
                onClick={() => history.push('/registration-form')}
            >
                Register Voter Form
            </button>
            <button
                type="button"
                onClick={() => history.push('/registered-voters')}
            >
                Registered Voters List
            </button>
        </div>
    );
};