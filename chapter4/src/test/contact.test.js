import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test("should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  const button1 = screen.getByText("Submit");
  expect(button1).toBeInTheDocument();
  // const button2 = screen.getByText("Random");
  // expect(button2).toBeInTheDocument();
  const input = screen.getByPlaceholderText("name");
  expect(input).toBeInTheDocument();

  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toEqual(2);
  expect(inputs[0]).toBeInTheDocument();
  expect(inputs[1]).toBeInTheDocument();
});
