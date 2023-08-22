import { render } from '@testing-library/react';

import ExploreFooter from './explore-footer';

describe('ExploreFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExploreFooter />);
    expect(baseElement).toBeTruthy();
  });
});
