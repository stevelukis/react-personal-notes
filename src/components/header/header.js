import React from 'react';
import SearchBox from "./searchBox";

function Header() {
    return (
        <header className="note-app__header">
            <h1>Notes</h1>
            <SearchBox />
        </header>
    )
}

export default Header;