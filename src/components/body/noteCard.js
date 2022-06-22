import React from 'react';
import { showFormattedDate } from "../../utils";

function NoteCard({ title, timestamp, content, archiveTriggerText }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(timestamp)}</p>
                <p className="note-item__body">{content}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button">Hapus</button>
                <button className="note-item__archive-button">{archiveTriggerText}</button>
            </div>
        </div>
    )
}

export default NoteCard;