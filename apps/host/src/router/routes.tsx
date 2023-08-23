import React, { Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { explore } from './constants';

const ExternalPages = React.lazy(() => import('external-pages/Module'));
const Explore = React.lazy(() => import('explore/Module'));

export const routes: RouteObject[] = [
  {
    path: '/*',
    element: (
      <Suspense fallback="Loading home">
        <ExternalPages />
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
