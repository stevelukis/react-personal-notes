import React from 'react';
import NoteInput from "./noteInput";
import ListNotes from "./listNotes";

function Body({ data, onAddNoteHandler, onDeleteHandler }) {
    return (
        <main className="note-app__body">
            <NoteInput onAddNoteHandler={onAddNoteHandler} />
            <ListNotes title="Catatan Aktif" archiveTriggerText="Arsipkan"
                       data={data.filter((note) => !note.archived)} onDeleteHandler={onDeleteHandler} />
            <ListNotes title="Arsip" archiveTriggerText="Aktifkan" data={data.filter((note) => note.archived)}
                       onDeleteHandler={onDeleteHandler} />
        </main>
    )
}

export default Body;