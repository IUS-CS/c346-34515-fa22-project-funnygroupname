import {render, screen, cleanup} from '@testing-library/react'
import func from './testReactComponent'

test('should render the hello page', () => {
    render(<func/>);
    const helloElement = screen.getByTestId('hello-1');
    expect(helloElement).toBeInTheDocument();
})