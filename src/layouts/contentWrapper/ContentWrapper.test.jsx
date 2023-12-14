import { render, screen } from "@testing-library/react";
import { ContentWrapper } from "./ContentWrapper";

const testCopy = "Foobar";

test("renders children", () => {
  render(<ContentWrapper>{testCopy}</ContentWrapper>);
  const placeholderText = screen.getByText(testCopy);
  expect(placeholderText).toBeInTheDocument();
});
