import { render, screen } from "@testing-library/react";
import React from "react";
import Calculator from "./Calculator";

describe("<Calculator/>", () => {
  it('shows number', () => {
    render(<Calculator/>);
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    numbers.forEach((n) => {
      expect(screen.getByText(n.toString())).toBeInTheDocument()
    });
  });
  it('shows 4 rows', () => {
    render(<Calculator />);
    const rows = screen.getAllByRole('row');

    expect(rows).toHaveLength(4);
  });
  it("shows calculation operators", () => {
    render(<Calculator />);
    const calcOperators = ["+", "-", "x", "÷"];

    calcOperators.forEach((operator) => {
      expect(screen.getByText(operator.toString())).toBeInTheDocument();
    });
  });
});