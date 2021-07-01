import { VoterEditRow } from "./VoterEditRow";
import { VoterViewRow } from "./VoterViewRow";

export const VotersList = ({
    voters, editVoterId,
    onEditVoter: editVoter,
    onDeleteVoter: deleteVoter,
    onUpdateVoter: updateVoter,
    onCancelVoter: cancelVoter,
}) => {
    return (
        <table>
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
                    : <VoterViewRow voter={voter} key={voter.id} onEditVoter={editVoter} onDeleteVoter={deleteVoter} />
                ))}
            </tbody>
        </table>
    );
};