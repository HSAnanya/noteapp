import React, { useState } from 'react';
import Note from './Note';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, input]);
      setInput('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Notes App</h1>
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="input-area">
        <input
          type="text"
          placeholder="Enter note"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes-list">
        {filteredNotes.map((note, index) => (
          <Note key={index} text={note} onDelete={() => deleteNote(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
