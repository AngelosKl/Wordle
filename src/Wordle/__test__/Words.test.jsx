import { vi, describe, it, expect } from 'vitest';
import { generateWordSet } from '../Words';

describe('generateWordSet', () => {
    beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                text: () => Promise.resolve('apple\nbanana\ncherry\ndate\nelderberry'),
            })
        );
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should fetch the word bank and generate a word set and a random word', async () => {
        const { wordSet, todaysWord } = await generateWordSet();

        expect(wordSet).toBeInstanceOf(Set);
        expect(wordSet.size).toBe(5);
        expect(wordSet.has('apple')).toBe(true);
        expect(wordSet.has('banana')).toBe(true);
        expect(wordSet.has('cherry')).toBe(true);
        expect(wordSet.has('date')).toBe(true);
        expect(wordSet.has('elderberry')).toBe(true);
        expect(typeof todaysWord).toBe('string');
        expect(wordSet.has(todaysWord)).toBe(true);
    });

    it('should handle fetch errors gracefully', async () => {
        global.fetch = vi.fn(() => Promise.reject(new Error('Failed to fetch')));
        await expect(generateWordSet()).rejects.toThrow('Failed to fetch');
    });
});