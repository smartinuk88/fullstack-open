import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newTelNumber, setNewTelNumber] = useState("");

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
        {persons.map((person) => (
          <React.Fragment key={person.name}>
            <p>{person.name}</p>
            <p>{person.telNo}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default App;
