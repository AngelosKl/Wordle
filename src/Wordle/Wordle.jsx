import React, { useEffect, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Keyboard from './Keyboard';
import Board from './Board';
import { boardDefault, generateWordSet } from './Words';

export const AppContext = createContext();

function Wordle() {
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState("");
    const [correctLetters, setCorrectLetters] = useState([]);
    const [almostLetters, setAlmostLetters] = useState([]);
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [gameResult, setGameResult] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet);
            setCorrectWord(words.todaysWord);
        });
    }, []);

    const onEnter = () => {
        if (currAttempt.letter !== 5) return;
        let currWord = "";
        for (let i = 0; i < 5; i++) {
            currWord += board[currAttempt.attempt][i] || "";
        }

        const normalizedCurrWord = currWord.trim().toLowerCase();
        const normalizedCorrectWord = correctWord.trim().toLowerCase();

        if (!wordSet.has(normalizedCurrWord)) {
            alert("Word not found");
            return;
        }

        if (normalizedCurrWord === normalizedCorrectWord) {
            setGameResult("win");
            setTimeout(() => {
                navigate('/finale', { state: { result: "win", correctWord } });
            }, 1000);
        } else if (currAttempt.attempt === 4) {
            setGameResult("lose");
            setTimeout(() => {
                navigate('/finale', { state: { result: "lose", correctWord } });
            }, 1000);
        }

        setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    };

    const onDelete = () => {
        if (currAttempt.letter === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
        setBoard(newBoard);
        setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
    };

    const onSelectLetter = (key) => {
        if (currAttempt.letter > 4) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letter] = key;
        setBoard(newBoard);
        setCurrAttempt({
            attempt: currAttempt.attempt,
            letter: currAttempt.letter + 1,
        });
    };

    return (
        <div className='wordle'>
            <AppContext.Provider value={{
                board, setBoard,
                currAttempt, setCurrAttempt,
                disabledLetters, setDisabledLetters,
                correctLetters, setCorrectLetters,
                almostLetters, setAlmostLetters,
                onSelectLetter, onDelete,
                onEnter, correctWord,
            }}>
                <Board />
                <Keyboard />
            </AppContext.Provider>
        </div>
    );
}

export default Wordle;
