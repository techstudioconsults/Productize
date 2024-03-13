import { render } from '@testing-library/react';
import Auth from '../lib/auth';

describe('Auth', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Auth />);
        expect(baseElement).toBeInTheDocument();
    });
});
