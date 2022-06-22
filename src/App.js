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

    onAddNoteHandler(title, body, timestamp) {
        this.setState((data) => {
            return {
                data: [
                    ...data,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: timestamp,
                        archived: false
                    }
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