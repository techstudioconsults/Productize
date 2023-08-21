import React, { Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { explore } from './constants';

const LandingPage = React.lazy(() => import('landing-page/Module'));
const Explore = React.lazy(() => import('explore/Module'));

export const routes: RouteObject[] = [
  {
    path: '/*',
    element: (
      <Suspense fallback="Loading home">
        <LandingPage />
      </Suspense>
    ),
  },
  {
    path: `/${explore}/*`,
    element: (
      <Suspense fallback="Loading explore">
        <Explore />
      </Suspense>
    ),
  },
];
