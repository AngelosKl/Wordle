import { vi } from 'vitest';
import { fireEvent, screen, render } from '@testing-library/react';
import Candidate from '../Candidate';
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

describe('Candidate', () => {
    it('should render text Candidate details', () => {
        render(
            <MemoryRouter>
                <Candidate />
            </MemoryRouter>
        );
        expect(
            screen.getByText((content) => content.includes('Name: Angelos Klimantiris'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('Age: 26'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('Sex: Male'))
        ).toBeInTheDocument();

        expect(
            screen.getByText((content) => content.includes('Nationality: Greek'))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes('Mobile: NOR +4797365604'))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes('Email: aklimantiris98@gmail.com'))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes('More info on my portfolio:'))
        ).toBeInTheDocument();
    });

    it('navigates to my portfolio website', () => {
        render(
            <MemoryRouter>
                <Candidate />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Portfolio'));
        expect(window.open).toHaveBeenCalledWith(
            'https://my-react-app-phi-wine.vercel.app/',
            '_blank',
            'noopener,noreferrer'
        );
    });

    it('navigates back to Welcome when back button is clicked', () => {
        render(
            <MemoryRouter>
                <Candidate />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Back'));
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
});