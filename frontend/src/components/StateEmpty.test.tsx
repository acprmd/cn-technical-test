import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import StateEmpty from "./StateEmpty";

describe("StateEmpty", () => {
    it("renders an informative message when there are no matching records", () => {
        render(<StateEmpty />);
        expect(
            screen.getByText("No records match your search or filters")
        ).toBeInTheDocument();
    });
});