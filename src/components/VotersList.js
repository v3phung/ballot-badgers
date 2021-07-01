export const VotersList = ({
    voters
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
                    <tr key={voter.id}>
                        <td>{voter.id}</td>
                        <td>{voter.firstName}</td>
                        <td>{voter.lastName}</td>
                        <td>{voter.address}</td>
                        <td>{voter.city}</td>
                        <td>{voter.birthday}</td>
                        <td>{voter.email}</td>
                        <td>{voter.phoneNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};