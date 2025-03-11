import { vi } from 'vitest'; // Import vi from vitest
import { fireEvent, render, screen } from '@testing-library/react';
import Welcome from '../Welcome';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Welcome', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it('should render all buttons', () => {
        render(
            <MemoryRouter>
                <Welcome />
            </MemoryRouter>
        );
        expect(screen.getByText('Candidate Info')).toBeInTheDocument();
        expect(screen.getByText('Sportradar Info')).toBeInTheDocument();
        expect(screen.getByText('Application Details')).toBeInTheDocument();
        expect(screen.getByText('Game Rules')).toBeInTheDocument();
        expect(screen.getByText('PLAY WORDLE')).toBeInTheDocument();
    });

    it('should navigate to Candidate Info component when button is clicked', () => {
        render(
            <MemoryRouter>
                <Welcome />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Candidate Info'));
        expect(mockNavigate).toHaveBeenCalledWith('/Candidate');
    });

    it('should navigate to Sportradar Info component when button is clicked', () => {
        render(
            <MemoryRouter>
                <Welcome />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Sportradar Info'));
        expect(mockNavigate).toHaveBeenCalledWith('/Sportradar');
    });

    it('should navigate to Application Details component when button is clicked', () => {
        render(
            <MemoryRouter>
                <Welcome />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Application Details'));
        expect(mockNavigate).toHaveBeenCalledWith('/Application');
    });

    it('should navigate to Game Rules component when button is clicked', () => {
        render(
            <MemoryRouter>
                <Welcome />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Game Rules'));
        expect(mockNavigate).toHaveBeenCalledWith('/Rules');
    });

    it('should navigate to Wordle component when button is clicked', () => {
        render(
            <MemoryRouter>
                <Welcome />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('PLAY WORDLE'));
        expect(mockNavigate).toHaveBeenCalledWith('/Wordle');
    });
});