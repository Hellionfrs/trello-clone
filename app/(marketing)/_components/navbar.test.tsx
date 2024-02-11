import { render, screen } from "@testing-library/react";
import { NavBar } from "./navbar";
import { expect, test } from "vitest";

test("renders NavBar component", () => {
  render(<NavBar />);

  // Example test, adjust to your component structure
  expect(screen.getByText("Login")).toBeDefined();
  expect(screen.getByText("Get Taskify for free")).toBeDefined();
});
