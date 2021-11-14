import * as React from "react"
import { render, fireEvent } from "@testing-library/react"
import Header from "./Header.js"

describe("Header", () => {
    it("Header position should not be sticky when scroll Y is under or equal to 0", () => {
       const { getByLabelText } = render(<Header />);
       const component = getByLabelText(/mainHeader/i);
       fireEvent.scroll(window, {
           target: {
               scrollY: 0
           }
       });
       expect(component.classList.contains("sticky")).toEqual(false);
    });

    it("Header position becomes sticky when scroll Y is over 0", () => {
        const { getByLabelText } = render(<Header />);
        const component = getByLabelText(/mainHeader/i);
        fireEvent.scroll(window, {
            target: {
                scrollY: 1
            }
        });
        expect(component.classList.contains("sticky")).toEqual(true);
    });
});