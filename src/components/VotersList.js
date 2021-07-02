import { VoterEditRow } from "./VoterEditRow";
import { VoterViewRow } from "./VoterViewRow";
import { useState, useEffect } from 'react';
export const VotersList = ({
    voters, editVoterId,
    onEditVoter: editVoter,
    onDeleteVoter: deleteVoter,
    onUpdateVoter: updateVoter,
    onCancelVoter: cancelVoter,
}) => {

    useEffect(() => {
        setDisplayVoters(voters);
    }, [voters])

    const [displayVoters, setDisplayVoters] = useState([...voters]);
    const [sortDirection, setSortDirection] = useState({
        id: false,
        firstName: false,
        lastName: false,
        address: false,
        city: false,
        birthday: false,
        email: false,
        phone: false,
    })

    const sortStringColumns = (sortType) => {
        console.log(sortType)
        let sortedList = []
        sortDirection[sortType] === false ?
            sortedList = [...displayVoters].sort((a, b) => (String(a[sortType]).toLowerCase() > String(b[sortType]).toLowerCase()) ? 1 : -1) :
            sortedList = [...displayVoters].sort((a, b) => (String(a[sortType]).toLowerCase() < String(b[sortType]).toLowerCase()) ? 1 : -1)
        const updatedSortDirection = { ...sortDirection }
        updatedSortDirection[sortType] = !(updatedSortDirection[sortType])
        setSortDirection(updatedSortDirection)
        setDisplayVoters([...sortedList])
    }

    const sortNumericalColumns = (sortType) => {
        const sortedList = [...displayVoters].sort((a, b) => (a[sortType] > b[sortType]) ? 1 : -1)
        setDisplayVoters([...sortedList])
    }

    return (
        <>
            <h1>{sortDirection.firstName}</h1>
            <table className='custom-table'>
                <thead>
                    <tr>
                        <th onClick={() => sortStringColumns('id')}>Id
                            <img src={sortDirection.id === false ? "/up-arrow.png" : '/down-arrow.png'} alt='sort-icon' className="arrow-img" />
                        </th>
                        <th onClick={() => sortStringColumns('firstName')}>First Name
                            <img src={sortDirection.firstName === false ? "/up-arrow.png" : '/down-arrow.png'} alt='sort-icon' className="arrow-img" />
                        </th>
                        <th onClick={() => sortStringColumns('lastName')}>Last Name
                            <img src={sortDirection.lastName === false ? "/up-arrow.png" : '/down-arrow.png'} alt='sort-icon' className="arrow-img" />
                        </th>
                        <th onClick={() => sortStringColumns('address')}>Address
                            <img src={sortDirection.address === false ? "/up-arrow.png" : '/down-arrow.png'} alt='sort-icon' className="arrow-img" />
                        </th>
                        <th onClick={() => sortStringColumns('city')}>City
                            <img src={sortDirection.city === false ? "/up-arrow.png" : '/down-arrow.png'} alt='sort-icon' className="arrow-img" />
                        </th>
                        <th onClick={() => sortStringColumns('birthday')}>Birthday
                            <img src={sortDirection.birthday === false ? "/up-arrow.png" : '/down-arrow.png'} alt='sort-icon' className="arrow-img" />
                        </th>
                        <th onClick={() => sortStringColumns('email')}>Email
                            <img src={sortDirection.email === false ? "/up-arrow.png" : '/down-arrow.png'} alt='sort-icon' className="arrow-img" />
                        </th>
                        <th onClick={() => sortStringColumns('phone')}>Phone
                            <img src={sortDirection.phone === false ? "/up-arrow.png" : '/down-arrow.png'} alt='sort-icon' className="arrow-img" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {displayVoters.map((voter) => (
                        voter.id === editVoterId
                            ? <VoterEditRow voter={voter} key={voter.id} onUpdateVoter={updateVoter} onCancelVoter={cancelVoter} />
                            : <VoterViewRow voter={voter} key={voter.id} onEditVoter={editVoter} onDeleteVoter={deleteVoter} />
                    ))}
                </tbody>
            </table >
        </>
    );
};