export const VoterViewRow = ({voter, onEditVoter: editVoter, onDeleteVoter }) => {

    const deleteVoter = () => onDeleteVoter(voter.id);

    return  (
        <tr>
            <td>{voter.id}</td>
            <td>{voter.firstName}</td>
            <td>{voter.lastName}</td>
            <td>{voter.address}</td>
            <td>{voter.city}</td>
            <td>{voter.birthday}</td>
            <td>{voter.email}</td>
            <td>{voter.phoneNumber}</td>
            <td>
                <button type="button" onClick={() => editVoter(voter.id)}>
                    Edit
                </button>
                <button type="button" onClick={deleteVoter}>
                    Delete
                </button>
            </td>
        </tr>
    )
};