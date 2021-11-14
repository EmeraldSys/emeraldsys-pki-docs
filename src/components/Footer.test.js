import * as React from "react"
import { render } from "@testing-library/react"
import Footer from "./Footer.js"

describe("Footer", () => {
    it("Footer is in the document", () => {
        const { container } = render(<Footer />);
        const component = container.getElementsByClassName("mainFooter")[0];
        expect(component).toBeInTheDocument();
    });

    it("Footer is a div", () => {
        const { container } = render(<Footer />);
        const component = container.getElementsByClassName("mainFooter")[0];
        expect(component).not.toBeNull();
        expect(component.tagName.toLowerCase()).toEqual("div");
    });
});