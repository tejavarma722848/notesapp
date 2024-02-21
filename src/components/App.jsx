import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import notes from '../notes';
import CreateArea from "./CreateArea";



function App(){
    const[notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deletNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deletNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;