import React from 'react';

function SearchBox({ onSearchKeywordChangeHandler }) {
    return (
        <div>
            <input placeholder="Cari catatan ..." onChange={(e) => {
                onSearchKeywordChangeHandler(e.target.value)
            }} />
        </div>
    );
}

export default SearchBox;