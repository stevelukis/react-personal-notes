import React from 'react';
import SearchBox from "./searchBox";

function Header({ onSearchKeywordChangeHandler }) {
    return (
        <header className="note-app__header">
            <h1>Notes</h1>
            <SearchBox onSearchKeywordChangeHandler={onSearchKeywordChangeHandler} />
        </header>
    )
}

export default Header;