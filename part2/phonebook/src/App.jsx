import { useEffect, useState } from "react";
import axios from "axios";
import SearchFilter from "./components/SearchFilter";
import AddPersonForm from "./components/AddPersonForm";
import PersonsList from "./components/PersonsList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newTelNumber, setNewTelNumber] = useState("");
  const [searchTerm, setNewSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);

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
