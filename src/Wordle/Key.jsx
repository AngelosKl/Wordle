import React, { useContext } from 'react';
import { AppContext } from './Wordle';

function Key({ keyVal, bigKey, disabled }) {
    const {
        onSelectLetter, onDelete, onEnter,
        correctLetters, almostLetters
    } = useContext(AppContext);

    const selectLetter = () => {

        if (keyVal === "ENTER") {
            onEnter();
        } else if (keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectLetter(keyVal);
        }
    };

    return (
        <div
            className="key"
            id={bigKey ? "big" :
                correctLetters.includes(keyVal) ? "correct" :
                    almostLetters.includes(keyVal) ? "almost" :
                        disabled ? "disabled" : ""}
            onClick={selectLetter}
        >
            {keyVal}
        </div>
    );
}

export default Key;
