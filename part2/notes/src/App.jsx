import { useState } from "react";
import Note from "./components/Note";
import { useEffect } from "react";
import notesService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    notesService
      .getAll()
      .then((initialNotes) => {
        setNotes(initialNotes);
      })
      .catch((error) => {
        console.error(`Error fetching notes: ${error}`);
      });
  }, []);

  const handleAddNote = (e) => {
    e.preventDefault();

    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    notesService
      .add(noteObj)
      .then((returnedNote) => {
        setNotes(notes.concat(returnedNote));
        setNewNote("");
      })
      .catch((error) => {
        console.error(`Error adding new note: ${error}`);
      });
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    notesService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id === id ? returnedNote : note)));
      })
      .catch(() => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "show important" : "show all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={handleAddNote}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
