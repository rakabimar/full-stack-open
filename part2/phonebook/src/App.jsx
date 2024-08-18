import { useState } from 'react'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import DisplayContacts from './components/DisplayContacts'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [showPersons, setShowPersons] = useState(persons)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
    filterContacts(persons, event.target.value)
  }

  const filterContacts = (persons, strToFilter) => {
    const filteredContacts = persons.filter(person => person.name.toLowerCase().includes(strToFilter.toLowerCase()))
    setShowPersons(filteredContacts)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearchChange} />

      <h2>Add a new</h2>
      <ContactForm nameValue={newName} nameOnChange={handleNameChange} numberValue={newNumber} numberOnChange={handleNumberChange} persons={persons} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} setShowPersons={setShowPersons}/>

      <h2>Numbers</h2>
      <DisplayContacts persons={showPersons} />
    </div>
  )
}

export default App