const DisplayContacts = ({persons}) => {
    return persons.map(person => {
        return (
        <div key={person.id}>
            {person.name} {person.number}
        </div>
        )
        }
    )
}

export default DisplayContacts