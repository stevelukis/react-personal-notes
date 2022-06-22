import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: ""
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(e) {
        const newTitle = e.target.value;
        const isValid = newTitle.length <= 50;

        if (isValid) {
            this.setState({
                title: newTitle
            })
        }
    }

    onBodyChangeEventHandler(e) {
        this.setState({
            body: e.target.value
        })
    }

    onSubmitEventHandler(e) {
        e.preventDefault();
        this.props.onAddNoteHandler(
            this.state.title,
            this.state.body
        )
    }

    render() {
        return (
            <div>
                <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                    <h2>Buat catatan</h2>
                    <p className="note-input__title__char-limit">Sisa karakter: {50 - this.state.title.length}</p>
                    <input className="note-input__title" placeholder="Judul" required={true} value={this.state.title}
                           onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" placeholder="Tulis catatan ..." required={true}
                              value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;