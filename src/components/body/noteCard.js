import React from 'react';
import { showFormattedDate } from "../../utils";

function NoteCard({ id, title, timestamp, body, archiveTriggerText, onDeleteHandler }) {

    const onDeleteClickEventHandler = () => {
        onDeleteHandler(id);
    }

    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(timestamp)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={onDeleteClickEventHandler}>Hapus</button>
                <button className="note-item__archive-button">{archiveTriggerText}</button>
            </div>
        </div>
    )
}

export default NoteCard;