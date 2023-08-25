import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('ExternalPagesLibUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
});
