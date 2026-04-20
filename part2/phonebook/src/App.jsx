import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newTelNumber, setNewTelNumber] = useState("");
  const [searchTerm, setNewSearchTerm] = useState("");

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAddPerson = (e) => {
    e.preventDefault();
    const personObj = {
      name: newName,
      number: newTelNumber,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(personObj));
    setNewName("");
    setNewTelNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label htmlFor="search">filter shown with</label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setNewSearchTerm(e.target.value)}
        />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          <label htmlFor="name">name: </label>
          <input
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number">number: </label>
          <input
            id="number"
            type="tel"
            value={newTelNumber}
            onChange={(e) => setNewTelNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map((person) => (
          <React.Fragment key={person.name}>
            <p>{person.name}</p>
            <p>{person.number}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default App;
