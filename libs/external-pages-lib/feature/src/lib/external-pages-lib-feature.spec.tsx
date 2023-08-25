import { render } from '@testing-library/react';

import ExternalPagesLibFeature from './external-pages-lib-feature';

describe('ExternalPagesLibFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExternalPagesLibFeature />);
    expect(baseElement).toBeTruthy();
  });
});
