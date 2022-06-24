import React from "react";
import NoteCard from "./noteCard";

function ListNotes({ title, archiveTriggerText, data, onDeleteHandler, onArchiveTriggerHandler }) {
    let content;
    if (data.length === 0) {
        content = <p className="note-app__body__empty-message">Tidak ada catatan</p>;
    } else {
        content = <div className="notes-list">
            {
                data.map((note) => (
                    <NoteCard key={note.id} id={note.id} title={note.title} body={note.body}
                              timestamp={note.createdAt}
                              archiveTriggerText={archiveTriggerText} onDeleteHandler={onDeleteHandler}
                              onArchiveTriggerHandler={onArchiveTriggerHandler} />
                ))
            }
        </div>

    }

    return (
        <>
            <h2>{title}</h2>
            {content}
        </>
    );
}

export default ListNotes;