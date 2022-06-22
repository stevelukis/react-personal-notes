import React from 'react';
import Header from "./components/header/header";
import Body from "./components/body/body";
import { getInitialData } from "./utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: getInitialData(),
            searchKeyword: ''
        }

        this.onSearchKeywordChangeHandler = this.onSearchKeywordChangeHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveTriggerHandler = this.onArchiveTriggerHandler.bind(this);
    }

    onSearchKeywordChangeHandler(newKeyword) {
        this.setState({
            searchKeyword: newKeyword
        })
    }

    onAddNoteHandler(title, body) {
        const timestamp = new Date();
        this.setState((prevState) => {
            return {
                data: [
                    {
                        id: +timestamp,
                        title,
                        body,
                        createdAt: timestamp,
                        archived: false
                    },
                    ...prevState.data
                ]
            }
        })
    }

    onDeleteHandler(id) {
        this.setState((prevState) => {
            return {
                data: prevState.data.filter((note) => note.id !== id)
            }
        })
    }

    onArchiveTriggerHandler(id) {
        this.setState((prevState) => {
            return {
                data: prevState.data.map((note) => {
                    if (note.id === id) {
                        note.archived = !note.archived
                    }
                    return note;
                })
            }
        })
    }

    getViewData() {
        return this.state.data.filter((note) => {
            // Case-insensitive search
            const titleLowerCase = note.title.toLowerCase();
            const keywordLowerCase = this.state.searchKeyword.toLowerCase();
            return titleLowerCase.includes(keywordLowerCase);
        });
    }

    render() {
        return (
            <>
                <Header onSearchKeywordChangeHandler={this.onSearchKeywordChangeHandler} />
                <Body data={this.getViewData()} onAddNoteHandler={this.onAddNoteHandler}
                      onDeleteHandler={this.onDeleteHandler} onArchiveTriggerHandler={this.onArchiveTriggerHandler} />
            </>
        )
    }
}

export default App;