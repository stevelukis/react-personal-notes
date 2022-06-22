import React from 'react';
import Header from "./components/header/header";
import Body from "./components/body/body";
import { getInitialData } from "./utils";

function App() {
    const data = getInitialData();

    return (
        <>
            <Header />
            <Body data={data} />
        </>
    )
}

export default App;