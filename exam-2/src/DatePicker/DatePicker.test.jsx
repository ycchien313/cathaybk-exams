import React from "react";
import { render, screen } from "@testing-library/react";
import { DatePicker } from "../DatePicker/DatePicker";
import { DatePickerProvider } from "../DatePicker/Provider/Provider";

jest.mock("../DatePicker/Provider/Provider", () => ({
  DatePickerProvider: ({ children, ...props }) => (
    <div data-testid="provider" {...props}>
      {children}
    </div>
  ),
}));
jest.mock("../DatePicker/Header", () => ({
  Header: () => <div data-testid="header">Header</div>,
}));
jest.mock("../DatePicker/Main", () => ({
  Main: () => <div data-testid="main">Main</div>,
}));

describe("DatePicker", () => {
  it("renders correctly", () => {
    render(<DatePicker />);
    expect(screen.getByTestId("provider")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });

  it("passes props to DatePickerProvider", () => {
    const testProps = { value: new Date() };
    render(<DatePickerProvider {...testProps} />);
    expect(screen.getByTestId("provider")).toHaveAttribute("value");
  });

  it("has correct width", () => {
    render(<DatePicker />);
    const container = screen.getByTestId("provider").parentElement;
    expect(container).toHaveClass("w-[350px]");
  });
});
