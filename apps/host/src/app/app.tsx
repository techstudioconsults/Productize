import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
const ExternalPages = React.lazy(() => import('external-pages/Module'));
const Explore = React.lazy(() => import('explore/Module'));

export function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route index path="/*" element={<ExternalPages />} />
        <Route path="/explore/*" element={<Explore />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
