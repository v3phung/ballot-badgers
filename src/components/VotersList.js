import { VoterEditRow } from "./VoterEditRow";
import { VoterViewRow } from "./VoterViewRow";
export const VotersList = ({
    voters, editVoterId, voterSortValue,
    onEditVoter: editVoter,
    onDeleteVoter: deleteVoter,
    onUpdateVoter: updateVoter,
    onCancelVoter: cancelVoter,
    onSetVoterSort: setVoterSort,
}) => {


    return (
        <>
            <table className='custom-table'>
                <thead>
                    <tr>
                        <th onClick={() => setVoterSort('id')}>Id
                            {voterSortValue.column === "id" ?
                                <img src={voterSortValue.sortDirection + "-arrow.png"} alt='sort-icon' className="arrow-img" />
                                : <div></div>
                            }                        </th>
                        <th onClick={() => setVoterSort('firstName')}>First Name
                            {voterSortValue.column === "firstName" ?
                                <img src={voterSortValue.sortDirection + "-arrow.png"} alt='sort-icon' className="arrow-img" />
                                : <div></div>
                            }                        </th>
                        <th onClick={() => setVoterSort('lastName')}>Last Name
                            {voterSortValue.column === "lastName" ?
                                <img src={voterSortValue.sortDirection + "-arrow.png"} alt='sort-icon' className="arrow-img" />
                                : <div></div>
                            }                        </th>
                        <th onClick={() => setVoterSort('address')}>Address
                            {voterSortValue.column === "address" ?
                                <img src={voterSortValue.sortDirection + "-arrow.png"} alt='sort-icon' className="arrow-img" />
                                : <div></div>
                            }

                        </th>
                        <th onClick={() => setVoterSort('city')}>City
                            {voterSortValue.column === "city" ?
                                <img src={voterSortValue.sortDirection + "-arrow.png"} alt='sort-icon' className="arrow-img" />
                                : <div></div>
                            }                        </th>
                        <th onClick={() => setVoterSort('birthday')}>Birthday
                            {voterSortValue.column === "birthday" ?
                                <img src={voterSortValue.sortDirection + "-arrow.png"} alt='sort-icon' className="arrow-img" />
                                : <div></div>
                            }
                        </th>
                        <th onClick={() => setVoterSort('email')}>Email
                            {voterSortValue.column === "email" ?
                                <img src={voterSortValue.sortDirection + "-arrow.png"} alt='sort-icon' className="arrow-img" />
                                : <div></div>
                            }
                        </th>
                        <th onClick={() => setVoterSort('phone')}>Phone
                            {voterSortValue.column === "phone" ?
                                <img src={voterSortValue.sortDirection + "-arrow.png"} alt='sort-icon' className="arrow-img" />
                                : <div></div>
                            }
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {voters.map((voter) => (
                        voter.id === editVoterId
                            ? <VoterEditRow voter={voter} key={voter.id} onUpdateVoter={updateVoter} onCancelVoter={cancelVoter} />
                            : <VoterViewRow voter={voter} key={voter.id} onEditVoter={editVoter} onDeleteVoter={deleteVoter} />
                    ))}
                </tbody>
            </table >
        </>
    );
};