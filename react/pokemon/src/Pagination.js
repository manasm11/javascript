import React from 'react'

function Pagination({onPreviousClick, onNextClick}) {
    return (
        <div>
            <button onClick={onPreviousClick}>Previous</button>
            <button onClick={onNextClick}>Next</button>
        </div>
    )
}

export default Pagination
