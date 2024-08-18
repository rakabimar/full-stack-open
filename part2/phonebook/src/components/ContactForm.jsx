const ContactForm = ({nameValue, nameOnChange, numberValue, numberOnChange, persons, setPersons, setNewName, setNewNumber, setShowPersons}) => {
    const checkNames = (personToCheck, persons) => {
        return !persons.some(person => person.name === personToCheck.name)
    }

    const addContact = (event) => {
        event.preventDefault()
        const newPerson = {
        name: nameValue,
        number: numberValue,
        id: persons.length + 1
        }
        if (!checkNames(newPerson, persons)) {
        alert(`${newPerson.name} is already added to phonebook`)
        return
        }
        setShowPersons(persons.concat(newPerson))
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
    }

    return (
        <form onSubmit={addContact}>
        <div>
            name: 
            <input 
                value={nameValue}
                onChange={nameOnChange}/>
        </div>
        <div>
            number: 
                <input 
                value={numberValue}
                onChange={numberOnChange}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
        </form>
    )
}

export default ContactForm