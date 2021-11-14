import * as React from "react"
import { render, fireEvent } from "@testing-library/react"
import Header from "./Header.js"

describe("Header", () => {
    it("Header is in the document", () => {
        const { container } = render(<Header />);
        const component = container.getElementsByClassName("mainHeader")[0];
        expect(component).toBeInTheDocument();
    });

    it("Header is a type of header", () => {
        const { container } = render(<Header />);
        const component = container.getElementsByClassName("mainHeader")[0];
        expect(component.tagName.toLowerCase()).toEqual("header");
    });

    it("Header contains alignHeader", () => {
        const { container } = render(<Header />);
        const component = container.getElementsByClassName("mainHeader")[0];
        expect(component.getElementsByClassName("alignHeader").length).toBeGreaterThanOrEqual(1);
    });

    it("alignHeader is a div", () => {
        const { container } = render(<Header />);
        const component = container.getElementsByClassName("mainHeader")[0].getElementsByClassName("alignHeader")[0];
        expect(component).not.toBeNull();
        expect(component.tagName.toLowerCase()).toEqual("div");
    });

    it("alignHeader contains logo", () => {
        const { container } = render(<Header />);
        const component = container.getElementsByClassName("mainHeader")[0].getElementsByClassName("alignHeader")[0];
        expect(component).not.toBeNull();
        expect(component.getElementsByTagName("img")[0].alt).toEqual("Logo");
    });

    it("Header position should not be sticky when scroll Y is under or equal to 0", () => {
       const { container } = render(<Header />);
       const component = container.getElementsByClassName("mainHeader")[0];
       fireEvent.scroll(window, {
           target: {
               scrollY: 0
           }
       });
       expect(component.classList.contains("sticky")).toEqual(false);
    });

    it("Header position becomes sticky when scroll Y is over 0", () => {
        const { container } = render(<Header />);
        const component = container.getElementsByClassName("mainHeader")[0];
        fireEvent.scroll(window, {
            target: {
                scrollY: 1
            }
        });
        expect(component.classList.contains("sticky")).toEqual(true);
    });
});