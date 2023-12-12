import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Button } from './Button';

const btnText = 'Foobar';
const mockOnClick = jest.fn();

test('renders correctly', () => {
    render(<Button btnText={btnText} onClick={()=>{}} />);
    const placeholderText = screen.getByText(btnText);
    expect(placeholderText).toBeInTheDocument();
});

test('calls the callback function that has been passed in', async () => {
    render(<Button btnText={btnText} onClick={mockOnClick}/>);
    fireEvent.click(screen.getByText(btnText));
    await waitFor(() => expect(mockOnClick).toHaveBeenCalled());
});
