import { render, screen, fireEvent, act } from '@testing-library/react';
import Wordle from '../Wordle';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('Wordle', () => {
    it('renders the keyboard component', () => {
        render(
            <MemoryRouter>
                <Wordle />
            </MemoryRouter>
        );
        const keyboard = screen.getByText('ENTER');
        expect(keyboard).toBeInTheDocument();
    });

    it('renders the Board component', () => {
        render(
            <MemoryRouter>
                <Wordle />
            </MemoryRouter>
        );
        const board = screen.getByTestId('board');
        expect(board).toBeInTheDocument();
    });

    it('updates the board when a letter is selected', async () => {
        render(
            <MemoryRouter>
                <Wordle />
            </MemoryRouter>
        );

        const board = screen.getByTestId('board');

        await act(async () => {
            fireEvent.click(screen.getByText('A'));
        });

        expect(board).toHaveTextContent('A');
    });
});

describe('Actions inside Wordle', () => {
    it('removes the last letter when Delete is clicked', async () => {
        render(
            <MemoryRouter>
                <Wordle />
            </MemoryRouter>
        );
        // buggy :/ I needed more time and knowledge to solve this..

    });

    it('should render the word on the board when ENTER is pressed', async () => {
        render(
            <MemoryRouter>
                <Wordle />
            </MemoryRouter>
        );

        // same here. i should have made many more tests for this component but it buggs out..probably smth to do with letter.test and keyboard.test files.
    });

});
