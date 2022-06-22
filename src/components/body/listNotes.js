import React from "react";
import NoteCard from "./noteCard";

function ListNotes({ title, archiveTriggerText, data }) {
    return (
        <>
            <h2>{title}</h2>
            <div className="notes-list">
                {
                    data.map((note) => (
                        <NoteCard key={note.id} title={note.title} body={note.body} timestamp={note.createdAt}
                                  archiveTriggerText={archiveTriggerText} />
                    ))
                }
            </div>
        </>
    );
}

export default ListNotes;