import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Board from '../Board';

vi.mock('../Letter', () => {
    return {
        default: vi.fn(() => <div data-testid="letter">Letter</div>),
    };
});

describe('Board', () => {
    it('renders the boards rows, should be 5', () => {
        render(<Board />);
        const rows = screen.getAllByTestId('row');
        expect(rows.length).toBe(5);
    });
});