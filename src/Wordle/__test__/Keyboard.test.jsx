import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Keyboard from "../Keyboard";
import { AppContext } from "../Wordle";
import React from "react";

describe("Keyboard", () => {
    let mockContextValue;

    beforeEach(() => {
        mockContextValue = {
            disabledLetters: [],
            correctLetters: [],
            almostLetters: [],
            currAttempt: { attempt: 0, letter: 0 },
            onSelectLetter: vi.fn(),
            onEnter: vi.fn(),
            onDelete: vi.fn(),
        };
    });

    it("handles keyboard keydown events correctly", async () => {
        render(
            <AppContext.Provider value={mockContextValue}>
                <Keyboard />
            </AppContext.Provider>
        );

        fireEvent.keyDown(document, { key: "A" });
        expect(mockContextValue.onSelectLetter).toHaveBeenCalledWith("A");

        fireEvent.keyDown(document, { key: "Enter" });
        expect(mockContextValue.onEnter).toHaveBeenCalled();

        fireEvent.keyDown(document, { key: "Backspace" });
        expect(mockContextValue.onDelete).toHaveBeenCalled();
    });
});
