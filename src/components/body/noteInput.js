import React from "react";

class NoteInput extends React.Component {
    render() {
        return (
            <div>
                <form className="note-input">
                    <h2>Buat catatan</h2>
                    <p className="note-input__title__char-limit">Sisa karakter: 50</p>
                    <input className="note-input__title" placeholder="Judul" required={true}/>
                    <textarea className="note-input__body" placeholder="Tulis catatan ..." required={true}/>
                    <button>Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;