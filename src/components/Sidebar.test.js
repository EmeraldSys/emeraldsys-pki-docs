import * as React from "react"
import { render } from "@testing-library/react"
import Sidebar from "./Sidebar.js"

describe("Sidebar", () => {
    it("Sidebar container is in the document", () => {
        const { container } = render(<Sidebar />);
        const component = container.getElementsByClassName("sidebarMain")[0];
        expect(component).toBeInTheDocument();
    });

    it("Sidebar container is a div", () => {
        const { container } = render(<Sidebar />);
        const component = container.getElementsByClassName("sidebarMain")[0];
        expect(component).not.toBeNull();
        expect(component.tagName.toLowerCase()).toEqual("div");
    });

    it("Sidebar content container is in the document", () => {
        const { container } = render(<Sidebar />);
        const component = container.getElementsByClassName("sidebarMain")[0].getElementsByClassName("sidebarContents")[0];
        expect(component).toBeInTheDocument();
    });

    it("Sidebar content container is a ul", () => {
        const { container } = render(<Sidebar />);
        const component = container.getElementsByClassName("sidebarMain")[0].getElementsByClassName("sidebarContents")[0];
        expect(component).not.toBeNull();
        expect(component.tagName.toLowerCase()).toEqual("ul");
    });

    it("Sidebar content container has 5 list items", () => {
        const { container } = render(<Sidebar />);
        const component = container.getElementsByClassName("sidebarMain")[0].getElementsByClassName("sidebarContents")[0];
        expect(component).not.toBeNull();
        expect(component.getElementsByTagName("li").length).toBe(5);
    });

    it("Sidebar content container list items each have a hyperlink", () => {
        const { container } = render(<Sidebar />);
        const component = container.getElementsByClassName("sidebarMain")[0].getElementsByClassName("sidebarContents")[0];
        expect(component).not.toBeNull();
        for (let li of component.getElementsByTagName("li"))
        {
            expect(li.getElementsByTagName("a").length).toBeGreaterThanOrEqual(1);
        }
    });

    it("Sidebar content container list item hyperlinks styled correctly", () => {
        const { container } = render(<Sidebar />);
        const component = container.getElementsByClassName("sidebarMain")[0].getElementsByClassName("sidebarContents")[0];
        expect(component).not.toBeNull();
        for (let li of component.getElementsByTagName("li"))
        {
            for (let anchor of li.getElementsByTagName("a"))
            {
                expect(anchor.style.color).toEqual("rgb(255, 255, 255)");
                expect(anchor.style.textDecoration).toEqual("none");
            }
        }
    });
});
