import { vi } from 'vitest'; // Import vi from vitest
import { fireEvent, screen, render } from '@testing-library/react';
import Application from '../Application';
import { MemoryRouter } from 'react-router-dom';

beforeAll(() => {
    global.open = vi.fn();
});

afterAll(() => {
    global.open.mockRestore();
});

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Application', () => {
    it('should render text application details', () => {
        render(
            <MemoryRouter>
                <Application />
            </MemoryRouter>
        );
        expect(
            screen.getByText((content) => content.includes('Company: Sportradar'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('Location: Trondheim'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('Role: Frontend Developer (React)'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('Assessment: Create the game Wordle'))
        ).toBeInTheDocument();
    });

    it('navigates to the Sportradar website', () => {
        render(
            <MemoryRouter>
                <Application />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Application'));
        expect(window.open).toHaveBeenCalledWith(
            'https://jobs.smartrecruiters.com/Sportradar/744000035536425-frontend-developer-react-',
            '_blank',
            'noopener,noreferrer'
        );
    });

    it('navigates back to Welcome when back button is clicked', () => {
        render(
            <MemoryRouter>
                <Application />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Back'));
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
});