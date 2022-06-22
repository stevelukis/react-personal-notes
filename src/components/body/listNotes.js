import React from "react";
import NoteCard from "./noteCard";

function ListNotes({ title, archiveTriggerText, data, onDeleteHandler }) {
    return (
        <>
            <h2>{title}</h2>
            <div className="notes-list">
                {
                    data.map((note) => (
                        <NoteCard key={note.id} id={note.id} title={note.title} body={note.body} timestamp={note.createdAt}
                                  archiveTriggerText={archiveTriggerText} onDeleteHandler={onDeleteHandler} />
                    ))
                }
            </div>
        </>
    );
}

export default ListNotes;