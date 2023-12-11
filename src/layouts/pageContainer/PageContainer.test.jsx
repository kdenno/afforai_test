import { render, screen } from "@testing-library/react";
import { PageContainer } from './PageContainer';

const testCopy = 'Foobar';

test('renders children', () => {
    render(<PageContainer>{testCopy}</PageContainer>);
    const placeholderText = screen.getByText(testCopy);
    expect(placeholderText).toBeInTheDocument();
});
