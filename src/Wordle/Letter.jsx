import React, { useContext, useEffect } from 'react';
import { AppContext } from './Wordle';

function Letter({ letterPos, attemptVal }) {
    const {
        board,
        correctWord,
        currAttempt,
        setDisabledLetters,
        setCorrectLetters,
        setAlmostLetters
    } = useContext(AppContext);

    const letter = board[attemptVal][letterPos];
    const correctWordArray = correctWord.toUpperCase().split('');

    let letterCount = {};
    correctWordArray.forEach(l => {
        letterCount[l] = (letterCount[l] || 0) + 1;
    });

    const correctLettersInAttempt = new Array(5).fill(false);
    let usedCorrectLetters = {};

    for (let i = 0; i < 5; i++) {
        if (board[attemptVal][i] === correctWordArray[i]) {
            correctLettersInAttempt[i] = true;
            usedCorrectLetters[board[attemptVal][i]] = (usedCorrectLetters[board[attemptVal][i]] || 0) + 1;
            letterCount[board[attemptVal][i]]--;
        }
    }


    const almostLettersInAttempt = new Array(5).fill(false);
    let usedAlmostLetters = {};

    for (let i = 0; i < 5; i++) {
        const letter = board[attemptVal][i];

        if (!correctLettersInAttempt[i] && correctWordArray.includes(letter)) {
            usedAlmostLetters[letter] = (usedAlmostLetters[letter] || 0);

            if (letterCount[letter] > 0 && usedAlmostLetters[letter] < letterCount[letter]) {
                almostLettersInAttempt[i] = true;
                usedAlmostLetters[letter]++;
                letterCount[letter]--;
            }
        }
    }

    const letterState = currAttempt.attempt > attemptVal
        ? (correctLettersInAttempt[letterPos] ? "correct" : (almostLettersInAttempt[letterPos] ? "almost" : "error"))
        : null;

    useEffect(() => {
        if (letter !== "") {
            if (correctLettersInAttempt[letterPos]) {
                setCorrectLetters((prev) => [...prev, letter]);
            } else if (almostLettersInAttempt[letterPos]) {
                setAlmostLetters((prev) => [...prev, letter]);
            } else {
                setDisabledLetters((prev) => [...prev, letter]);
            }
        }
    }, [currAttempt.attempt]);

    return (
        <div className='letter' id={letterState}>{letter}</div>
    );
}

export default Letter;
