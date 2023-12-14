import { render, screen } from "@testing-library/react";
import { ContentContainer } from "./ContentContainer";

const testCopy = "Foobar";

test("renders children", () => {
  render(<ContentContainer>{testCopy}</ContentContainer>);
  const placeholderText = screen.getByText(testCopy);
  expect(placeholderText).toBeInTheDocument();
});
