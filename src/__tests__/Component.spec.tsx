import { render, screen } from '@testing-library/react';
import MyTest from '../app/MyTest';

describe('Component', () => {
    test(`greet renders correctly`, () => {
        render(<MyTest name={``} />);
        const textElement = screen.getByRole('button');
        expect(textElement).toBeInTheDocument();
    });

    it(`greet renders with name`, () => {
        render(<MyTest name={`Kingsley`} />);
        const textElement = screen.getByText(`Kingsley`);
        expect(textElement).toBeInTheDocument();
    });
});
