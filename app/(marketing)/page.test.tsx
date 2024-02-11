import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import MarketingPage from "./page";

test("Marketing Page renders correctly", () => {
  render(<MarketingPage />);
  
  // Check if the main container div is present

  // Check if certain elements are present
  expect(screen.getByText(/No 1 task managment/i)).toBeDefined();
  expect(screen.getByText(/Taskify helps team move!/i)).toBeDefined();
  expect(screen.getByText(/Get taskify for free/i )).toBeDefined();

});