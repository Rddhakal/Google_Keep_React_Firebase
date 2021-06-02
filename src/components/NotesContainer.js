import React, { useEffect, useState } from 'react'
import '../styles/NotesContainer.css'
import AddNotesContainer from './AddNotesContainer'
import NoteCard from './NoteCard'
import db from '../firebase'

const NotesContainer = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        db.collection("notes").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setNotes(snapshot.docs.map((doc) => ({
                id: doc.id,
                title: doc.data().title,
                note: doc.data().note,
                timestamp: doc.data().timestamp
            })))
        })
    }, [])

    return (
        <>
            <div className="notes_container">
                <AddNotesContainer />
                <div className="notes_card">
                    {
                        notes.map((note) => {
                            return <NoteCard id={note.id} title={note.title} note={note.note} key={note.key} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default NotesContainer
