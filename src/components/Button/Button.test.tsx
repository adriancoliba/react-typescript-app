import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

test("renders Button with correct name", () => {
    render(<Button children="Test" onClick={jest.fn()}/>);
    const buttonElement = screen.getByRole('button', { name: /Test/i });
    
    expect(buttonElement).toBeInTheDocument();
});

test("renders Button with type 'button'", () => {
    render(<Button children="Test" onClick={jest.fn()} type="button"/>);
    const buttonElement = screen.getByRole('button', { name: /Test/i });
    
    expect(buttonElement.getAttribute("type")).toBe("button");
});

test("renders Button with type 'submit'", () => {
    render(<Button children="Test" onClick={jest.fn()} type="submit"/>);
    const buttonElement = screen.getByRole('button', { name: /Test/i });
    
    expect(buttonElement.getAttribute("type")).toBe("submit");
});

test("renders Button with type 'reset'", () => {
    render(<Button children="Test" onClick={jest.fn()} type="reset"/>);
    const buttonElement = screen.getByRole('button', { name: /Test/i });
    
    expect(buttonElement.getAttribute("type")).toBe("reset");
});

test("renders Button that is disabled", () => {
    render(<Button children="Test" onClick={jest.fn()} disabled/>);
    const buttonElement = screen.getByRole('button', { name: /Test/i });
    
    expect(buttonElement).toBeDisabled();
});

test("renders Button that is not disabled", () => {
    render(<Button children="Test" onClick={jest.fn()} disabled={false}/>);
    const buttonElement = screen.getByRole('button', { name: /Test/i });
    
    expect(buttonElement).not.toBeDisabled();
});

test("onClick function is called after Button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log");

    render(<Button children="Test" onClick={() => console.log("button clicked")}/>);

    const buttonElement = screen.getByRole("button", { name: /Test/i });
    fireEvent.click(buttonElement);
    
    expect(consoleSpy).toHaveBeenCalledWith("button clicked");
});

test("renders Buttons with different classNames", () => {
    render(
        <>
            <Button children="Small" onClick={jest.fn()} size="small" variant="primary"/>
            <Button children="Medium" onClick={jest.fn()} size="medium" variant="secondary"/>
            <Button children="Large" onClick={jest.fn()} size="large" variant="danger"/>
            <Button children="Pill" onClick={jest.fn()} pill disabled className="mt-6 mb-2"/>
        </>
    );

    const smallButton = screen.getByRole("button", { name: /Small/i });
    const mediumButton = screen.getByRole("button", { name: /Medium/i });
    const largeButton = screen.getByRole("button", { name: /Large/i });
    const pill = screen.getByRole("button", { name: /Pill/i });
    
    // size class
    expect(smallButton.getAttribute("class")).toMatch(/px-2 py-1 text-sm rounded/i);
    expect(mediumButton.getAttribute("class")).toMatch(/px-4 py-2 text-base rounded-md/i);
    expect(largeButton.getAttribute("class")).toMatch(/px-8 py-3 text-lg rounded-lg/i);

    // variant class
    expect(smallButton.getAttribute("class")).toMatch(/bg-blue-500 hover:bg-blue-800 text-white/i);
    expect(mediumButton.getAttribute("class")).toMatch(/bg-gray-200 hover:bg-gray-500 text-gray-900 hover:text-white/i);
    expect(largeButton.getAttribute("class")).toMatch(/bg-red-500 hover:bg-red-800 text-white/i);

    // pill class
    expect(pill.getAttribute("class")).toMatch(/rounded-full/i);

    // disabled class
    expect(pill.getAttribute("class")).toMatch(/opacity-50 cursor-not-allowed/i);
    
    // className prop class
    expect(pill.getAttribute("class")).toMatch(/mt-6 mb-2/i);

    // base class
    expect(pill.getAttribute("class")).toMatch(/focus:outline-none transition ease-in-out duration-300/i);
});
