import { render, screen } from '@testing-library/react';
import Letter from '../Letter';
import { AppContext } from '../Wordle';
import React from 'react';

describe('Letter', () => {
    const mockSetCorrectLetters = vi.fn();
    const mockSetAlmostLetters = vi.fn();
    const mockSetDisabledLetters = vi.fn();

    const contextValue = {
        board: [
            ["A", "B", "C", "D", "E"],
            ["F", "G", "H", "I", "J"],
            ["K", "L", "M", "N", "O"],
            ["P", "Q", "R", "S", "T"],
            ["U", "V", "W", "X", "Y"]
        ],
        correctWord: "APPLE",
        currAttempt: { attempt: 0, letter: 0 },
        setCorrectLetters: mockSetCorrectLetters,
        setAlmostLetters: mockSetAlmostLetters,
        setDisabledLetters: mockSetDisabledLetters,
        correctLetters: [],
        almostLetters: [],
        disabledLetters: []
    };

    it('renders correctly with props', () => {
        render(
            <AppContext.Provider value={contextValue}>
                <Letter letterPos={0} attemptVal={0} />
            </AppContext.Provider>
        );
        const letterElement = screen.getByText('A');
        expect(letterElement).toBeInTheDocument();
    });

    it('calls setCorrectLetters when the letter is correct', () => {
        render(
            <AppContext.Provider value={contextValue}>
                <Letter letterPos={0} attemptVal={0} />
            </AppContext.Provider>
        );

        expect(mockSetCorrectLetters).toHaveBeenCalled();
    });

    it('calls setDisabledLetters if the letter is incorrect', () => {
        render(
            <AppContext.Provider value={contextValue}>
                <Letter letterPos={1} attemptVal={1} />
            </AppContext.Provider>
        );
        expect(mockSetDisabledLetters).toHaveBeenCalled();
    });

    it('calls setAlmostLetters if the letter is almost corrrect', () => {
        render(
            <AppContext.Provider value={contextValue}>
                <Letter letterPos={1} attemptVal={1} />
            </AppContext.Provider>
        );
        expect(mockSetDisabledLetters).toHaveBeenCalled();
    });
});
