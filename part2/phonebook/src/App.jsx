import { useEffect, useState } from "react";
import personsService from "./services/persons";
import SearchFilter from "./components/SearchFilter";
import AddPersonForm from "./components/AddPersonForm";
import PersonsList from "./components/PersonsList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newTelNumber, setNewTelNumber] = useState("");
  const [searchTerm, setNewSearchTerm] = useState("");

  useEffect(() => {
    personsService
      .getAll()
      .then((returnedPersons) => {
        setPersons(returnedPersons);
      })
      .catch((error) => {
        console.log(`Error fetching persons: ${error}`);
        alert("Error fetching persons");
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

    personsService
      .create(personObj)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewTelNumber("");
        console.log(returnedPerson);
      })
      .catch((error) => {
        console.error(`Error adding ${newName} to server: ${error}`);
        alert(`Error adding ${newName}`);
      });
  };

  const handleDeletePerson = (person) => {
    console.log(person);
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .deletePerson(person.id)
        .then(() => setPersons(persons.filter((p) => p.id !== person.id)))
        .catch((error) => {
          console.log(`Error deleting ${person.name}: ${error}`);
          alert(`Error deleting ${person.name}. Please try again`);
        });
    }
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
      <PersonsList persons={filteredPersons} onDelete={handleDeletePerson} />
    </div>
  );
};

export default App;
