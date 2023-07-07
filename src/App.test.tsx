import React from "react";
import { render, screen } from "@testing-library/react";
import DefaultLayout from "./components/shared-layouts/DefaultLayout";

test("renders learn react link", () => {
  render(<DefaultLayout />);
  const linkElement = screen.getByText(/Feel !t/i);
  expect(linkElement).toBeInTheDocument();
});
