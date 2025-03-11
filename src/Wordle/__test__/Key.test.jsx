import { render, screen, fireEvent } from '@testing-library/react';
import { AppContext } from '../Wordle';
import Key from '../Key';
import { vi, describe, it, expect } from 'vitest';



const mockContextValue = {
    onSelectLetter: vi.fn(),
    onDelete: vi.fn(),
    onEnter: vi.fn(),
    correctLetters: ['A'],
    almostLetters: ['B'],
};

describe('Key', () => {
    it('renders and triggers onSelectLetter when a key is clicked', () => {
        render(
            <AppContext.Provider value={mockContextValue}>
                <Key keyVal="A" />
            </AppContext.Provider>
        );

        const keyElement = screen.getByText('A');
        fireEvent.click(keyElement);
        expect(mockContextValue.onSelectLetter).toHaveBeenCalledWith('A');
    });

    it('renders and triggers onDelete when DELETE key is clicked', () => {
        render(
            <AppContext.Provider value={mockContextValue}>
                <Key keyVal="DELETE" />
            </AppContext.Provider>
        );

        const deleteKey = screen.getByText('DELETE');
        fireEvent.click(deleteKey);
        expect(mockContextValue.onDelete).toHaveBeenCalled();
    });

    it('renders and triggers onEnter when ENTER key is clicked', () => {
        render(
            <AppContext.Provider value={mockContextValue}>
                <Key keyVal="ENTER" />
            </AppContext.Provider>
        );

        const enterKey = screen.getByText('ENTER');
        fireEvent.click(enterKey);
        expect(mockContextValue.onEnter).toHaveBeenCalled();
    });

    it('renders Key with correct styling for correct letter', () => {
        render(
            <AppContext.Provider value={mockContextValue}>
                <Key keyVal="A" />
            </AppContext.Provider>
        );
        const keyElement = screen.getByText('A');
        expect(keyElement).toHaveAttribute('id', 'correct');
    });

    it('renders Key with correct styling for almost correct letter', () => {
        render(
            <AppContext.Provider value={mockContextValue}>
                <Key keyVal="B" />
            </AppContext.Provider>
        );
        const keyElement = screen.getByText('B');
        expect(keyElement).toHaveAttribute('id', 'almost');
    });

    it('renders Key with correct styling when disabled', () => {
        render(
            <AppContext.Provider value={mockContextValue}>
                <Key keyVal="C" disabled={true} />
            </AppContext.Provider>
        );
        const keyElement = screen.getByText('C');
        expect(keyElement).toHaveAttribute('id', 'disabled');
    });
});
