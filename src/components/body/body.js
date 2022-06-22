import React from 'react';
import NoteInput from "./noteInput";
import ListNotes from "./listNotes";

function Body() {
    return (
        <main className="note-app__body">
            <NoteInput />
            <ListNotes title="Catatan Aktif" archiveTriggerText="Arsipkan"/>
            <ListNotes title="Arsip" archiveTriggerText="Aktifkan"/>
        </main>
    )
}

export default Body;