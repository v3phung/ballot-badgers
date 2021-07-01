import { useForm } from "../hooks/useForm";

export const VoterEditRow = ({voter, onUpdateVoter,
                             onCancelVoter: cancelVoter}) => {

    const [ voterForm , change] = useForm({
        firstName: voter.firstName,
        lastName: voter.lastName,
        address: voter.address,
        city: voter.city,
        birthday: voter.birthday,
        email: voter.email,
        phoneNumber: voter.phoneNumber,
    });

    const updateVoter = () => {
        onUpdateVoter({...voterForm, id: voter.id})
    };

    return (
        <tr>
            <td>{voter.id}</td>
            <td><input
                type="text"
                id="edit-first-name-input"
                name="firstName"
                value={voterForm.firstName}
                onChange={change}
            /></td>
            <td><input
                type="text"
                id="edit-last-name-input"
                name="lastName"
                value={voterForm.lastName}
                onChange={change}
            /></td>
            <td><input
                type="text"
                id="edit-address-input"
                name="address"
                value={voterForm.address}
                onChange={change}
            /></td>
            <td><input
                type="text"
                id="edit-city-input"
                name="city"
                value={voterForm.city}
                onChange={change}
            /></td>
            <td><input
                type="text"
                id="edit-birthday-input"
                name="birthday"
                value={voterForm.birthday}
                onChange={change}
                /></td>
            <td><input
                type="text"
                id="edit-email-input"
                name="email"
                value={voterForm.email}
                onChange={change}
            /></td>
            <td><input
                type="text"
                id="phone-input"
                name="phoneNumber"
                value={voterForm.phoneNumber}
                onChange={change}
            /></td>
            <td>
                <button type="button" onClick={updateVoter}>
                    Save
                </button>
                <button type="button" onClick={() => cancelVoter()}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};