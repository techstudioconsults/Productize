import { ErrorBoundary, SpinnerComponent } from '@productize/shared/ui';
import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

const Auth = React.lazy(() => import('auth/Module'));
const Dashboard = React.lazy(() => import('dashboard/Module'));
const ExternalPages = React.lazy(() => import('external-pages/Module'));
const Explore = React.lazy(() => import('explore/Module'));

export function App() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<SpinnerComponent />}>
        <Routes>
          <Route index path="/*" element={<ExternalPages />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/explore/*" element={<Explore />} />
        </Routes>
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default App;
