import React, { useCallback, useEffect, useContext } from 'react';
import Key from './Key';
import { AppContext } from './Wordle';


function Keyboard() {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const {
        disabledLetters,
        currAttempt,
        onSelectLetter,
        onEnter,
        onDelete,
    } = useContext(AppContext);

     
    const handleKeyboard = useCallback(
        (event) => {

            if (event.key === "Enter") {
                onEnter();
            } else if (event.key === "Backspace") {
                onDelete();
            } else {
                keys1.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key);
                    }
                });
                keys2.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key);
                    }
                });
                keys3.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key);
                    }
                });
            }
        },
        [currAttempt]
    );
    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        };
    }, [handleKeyboard]);

    console.log(disabledLetters);
    return (
        <div className="keyboard" onKeyDown={handleKeyboard} data-testid="keyboard">
            <div className="firstLine">
                {keys1.map((key) => {
                    return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
                })}
            </div>
            <div className="secondLine">
                {keys2.map((key) => {
                    return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
                })}
            </div>
            <div className="thirdLine">
                <Key keyVal={"ENTER"} bigKey />
                {keys3.map((key) => {
                    return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
                })}
                <Key keyVal={"DELETE"} bigKey />
            </div>
        </div>
    );
}

export default Keyboard;