import { render } from '@testing-library/react';

import ExploreLibFeature from './explore-lib-feature';

describe('ExploreLibFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExploreLibFeature />);
    expect(baseElement).toBeTruthy();
  });
});
