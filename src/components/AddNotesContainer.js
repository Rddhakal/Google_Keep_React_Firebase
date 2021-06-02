import React, { useState } from 'react'
import '../styles/AddNotesContainer.css'
import { Button } from '@material-ui/core'
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CropOriginalOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';
import firebase from 'firebase'
import db from '../firebase'

const AddNotesContainer = () => {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")

    const addNote = () => {
        if (note === "") {
            alert("Fill the input")
        } else {
            db.collection("notes").add({
                title: title,
                note: note,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            setTitle("")
            setNote("")
        }
    }

    return (
        <>
            <div className="add_notes_container">
                <div className="input_container">
                    <input type="text" className="title_input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea className="note_input" placeholder="Take a note ..." value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                    <div className="input_bottom">
                        <div className="left">
                            <Button>
                                <AddAlertOutlinedIcon />
                            </Button>
                            <Button>
                                <PermIdentityOutlinedIcon />
                            </Button>
                            <Button>
                                <ColorLensOutlinedIcon />
                            </Button>
                            <Button>
                                <CropOriginalOutlinedIcon />
                            </Button>
                            <Button>
                                <ArchiveOutlinedIcon />
                            </Button>
                            <Button>
                                <MoreVertOutlinedIcon />
                            </Button>
                        </div>
                        <Button className="add_btn">
                            <AddOutlinedIcon onClick={() => addNote()} />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNotesContainer
