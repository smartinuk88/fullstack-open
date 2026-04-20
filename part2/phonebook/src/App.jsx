import { useState } from "react";
import SearchFilter from "./components/SearchFilter";
import AddPersonForm from "./components/AddPersonForm";
import PersonsList from "./components/PersonsList";

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
      <SearchFilter
        onChange={(e) => setNewSearchTerm(e.target.value)}
        searchTerm={searchTerm}
      />
      <h2>Add a new</h2>
      <AddPersonForm
        onChangeName={(e) => setNewName(e.target.value)}
        onChangeNumber={(e) => setNewTelNumber(e.target.value)}
        newName={newName}
        newTelNumber={newTelNumber}
        onSubmit={handleAddPerson}
      />
      <h2>Numbers</h2>
      <PersonsList persons={filteredPersons} />
    </div>
  );
};

export default App;
