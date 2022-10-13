import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Hello from './testReactComponent'


test('should render the hello page', () => {
    render(<Hello/>);
    const helloElement = screen.getByTestId('hello-1');
    expect(helloElement).toBeInTheDocument();
})

// Testing react components is not super necessary,
// as the React team would be worried about that themselves.
// Although, by making a web solution, tests to see if these react
// elements are created and placed correctly can be important