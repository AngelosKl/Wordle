import { vi } from 'vitest';
import { fireEvent, screen, render } from '@testing-library/react';
import Rules from '../Rules';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = vi.fn();


vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Rules', () => {
    it('should render text Rules details', () => {
        render(
            <MemoryRouter>
                <Rules />
            </MemoryRouter>
        );
        expect(
            screen.getByText((content) => content.includes('Game Rules'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('All words are 5 letters long.'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('The guesser gets'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('The yellow highlight'))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes('Example:'))
        ).toBeInTheDocument();
    });

    it('navigates back to Welcome when back button is clicked', () => {
        render(
            <MemoryRouter>
                <Rules />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Back'));
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
});