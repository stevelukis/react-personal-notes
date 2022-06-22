import React from "react";
import NoteCard from "./noteCard";

function ListNotes({ title, archiveTriggerText }) {
    return (
        <>
            <h2>{title}</h2>
            <div className="notes-list">
                <NoteCard title={"Test title"} content="dafawe" timestamp={new Date()} archiveTriggerText={archiveTriggerText} />
            </div>
        </>
    );
}

export default ListNotes;