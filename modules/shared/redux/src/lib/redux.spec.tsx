import { render } from '@testing-library/react';

import Redux from './redux';

describe('Redux', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Redux />);
    expect(baseElement).toBeTruthy();
  });
});
