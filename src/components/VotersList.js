import { VoterEditRow } from "./VoterEditRow";
import { VoterViewRow } from "./VoterViewRow";

export const VotersList = ({
    voters, editVoterId,
    onEditVoter: editVoter,
    onDeleteVoter: deleteVoter,
    onUpdateVoter: updateVoter,
    onCancelVoter: cancelVoter,
}) => {

    const deleteVotersList = [];

    // Save a list of multiple voters to be deleted
    const onToggleSelectedVoter = (voterId) => {

        if (deleteVotersList.includes(voterId)) {
            deleteVotersList.filter(v => v === voterId);
        } else {
            deleteVotersList.push(voterId);
        }
    };

    // Delete multiple voters
    const deleteSelectedVoters = () => {
        deleteVotersList.forEach(e => deleteVoter(e));
    }

    return (
        <>
            <table className='custom-table'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Birthday</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {voters.map((voter) => (
                    voter.id === editVoterId
                        ? <VoterEditRow voter={voter} key={voter.id} onUpdateVoter={updateVoter} onCancelVoter={cancelVoter}/>
                        : <VoterViewRow voter={voter} key={voter.id}
                                        onEditVoter={editVoter} onDeleteVoter={deleteVoter}
                                        deleteVoters={deleteVoter} onToggleSelectedVoter={onToggleSelectedVoter}/>
                ))}
                </tbody>
            </table>

            <button type="button" onClick={deleteSelectedVoters}>
                Delete Selected Voters
            </button>
        </>
    );
};