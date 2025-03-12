import { vi, describe, it, expect } from 'vitest';
import { fireEvent, screen, render } from '@testing-library/react';
import Sportradar from '../Sportradar';
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

describe('Sportradar', () => {
    it('should render text Sportradar details', () => {
        render(
            <MemoryRouter>
                <Sportradar />
            </MemoryRouter>
        );
        expect(
            screen.getByText((content) => content.includes('About'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('Sportradar is an international'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('Mission'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('Sportradar provides'))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes('Learn more..'))
        ).toBeInTheDocument();
    });

    it('navigates to Sportradars website', () => {
        render(
            <MemoryRouter>
                <Sportradar />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Sportradar'));
        expect(window.open).toHaveBeenCalledWith(
            'https://sportradar.com/',
            '_blank',
            'noopener,noreferrer'
        );
    });

    it('navigates back to Welcome when back button is clicked', () => {
        render(
            <MemoryRouter>
                <Sportradar />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Back'));
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
});