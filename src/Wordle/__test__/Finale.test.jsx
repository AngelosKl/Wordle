import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import Finale from '../Finale';

vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useLocation: vi.fn(),
        useNavigate: vi.fn(),
    };
});

describe('Finale', () => {
    const mockNavigate = vi.fn();
    const mockLocation = {
        state: {
            result: 'win',
            correctWord: 'APPLE',
        },
    };

    beforeEach(() => {
        useLocation.mockReturnValue(mockLocation);
        useNavigate.mockReturnValue(mockNavigate);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders the win message and correct word', () => {
        render(
            <MemoryRouter>
                <Finale />
            </MemoryRouter>
        );

        expect(screen.getByText('🎉 Congratulations! You won!')).toBeInTheDocument();
        expect(screen.getByText('The correct word was:')).toBeInTheDocument();
        expect(screen.getByText('APPLE')).toBeInTheDocument();
    });

    it('renders the lose message and correct word', () => {
        useLocation.mockReturnValue({
            state: {
                result: 'lose',
                correctWord: 'APPLE',
            },
        });

        render(
            <MemoryRouter>
                <Finale />
            </MemoryRouter>
        );

        expect(screen.getByText('😢 Game Over!')).toBeInTheDocument();
        expect(screen.getByText('The correct word was:')).toBeInTheDocument();
        expect(screen.getByText('APPLE')).toBeInTheDocument();
    });

    it('navigates to the home page when the Menu button is clicked', () => {
        render(
            <MemoryRouter>
                <Finale />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('🏠 Home'));
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    it('navigates to the Wordle page and reloads when the Retry button is clicked', () => {
        delete window.location;
        window.location = { reload: vi.fn() };
        vi.useFakeTimers();

        render(
            <MemoryRouter>
                <Finale />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('🔄 Retry'));
        vi.runAllTimers();
        expect(mockNavigate).toHaveBeenCalledWith('/Wordle');
        expect(window.location.reload).toHaveBeenCalled();
        vi.useRealTimers();
    });
});