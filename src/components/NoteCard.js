import React from 'react'
import '../styles/NoteCard.css'
import { Button } from '@material-ui/core'
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import db from '../firebase'

const NoteCard = ({ id, title, note }) => {

    const deleteNote = (id) => {
        db.collection("notes").doc(id).delete()
    }

    return (
        <>
            <div className="note_card">
                <div className="note_card_text">
                    <p className="title_text">{title}</p>
                    <p className="note_text">{note}</p>
                </div>
                <div className="note_card_bottom">
                    <Button>
                        <AddAlertOutlinedIcon />
                    </Button>
                    <Button>
                        <ColorLensOutlinedIcon />
                    </Button>
                    <Button>
                        <ArchiveOutlinedIcon />
                    </Button>
                    <Button>
                        <DeleteOutlinedIcon onClick={() => deleteNote(id)} />
                    </Button>
                    <Button>
                        <MoreVertOutlinedIcon />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default NoteCard
