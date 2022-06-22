import React from 'react';
import Header from "./components/header/header";
import Body from "./components/body/body";
import { getInitialData } from "./utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: getInitialData()
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
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

    render() {
        return (
            <>
                <Header />
                <Body data={this.state.data} onAddNoteHandler={this.onAddNoteHandler} />
            </>
        )
    }
}

export default App;