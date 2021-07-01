
export const ElectionList = () => {

    const initialElections = [
        {
            id: 1,
            name: "Foo",
            voterIds: [],
            questions: [
                {
                    id: 1,
                    text: "Do you like dogs?",
                    yesVotes: 50
                },
                {
                    id: 2,
                    text: "Do you like cats?",
                    yesVotes: 42
                }
            ]
        },
        {
            id: 2,
            name: "Bar",
            voterIds: [],
            questions: [
                {
                    id: 3,
                    text: "Do you like nature?",
                    yesVotes: 93
                },
                {
                    id: 4,
                    text: "Do you like food?",
                    yesVotes: 100
                }
            ]
        }
    ]

    return (
        <>
            <div>Election List</div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Results</th>
                </tr>
                {initialElections.map(e => (
                    <tr>
                        <td>{e.name}</td>
                        <td><button type='button' onClick={() => { }}>View Results</button></td>
                    </tr>
                ))}
            </table>
        </>
    )

};