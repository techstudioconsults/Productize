import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
const Auth = React.lazy(() => import('auth/Module'));

const Dashboard = React.lazy(() => import('dashboard/Module'));

// const Authentication = React.lazy(() => import('authentication/Module'));

const ExternalPages = React.lazy(() => import('external-pages/Module'));
const Explore = React.lazy(() => import('explore/Module'));

export function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route index path="/*" element={<ExternalPages />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* <Route path="/auth/*" element={<Authentication />} /> */}
        <Route path="/explore/*" element={<Explore />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
