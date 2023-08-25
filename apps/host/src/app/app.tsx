import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
const ExternalPages = React.lazy(() => import('external-pages/Module'));
const Explore = React.lazy(() => import('explore/Module'));

export function App() {
  return (
    <React.Suspense fallback={<p>Loaing...</p>}>
      <h1>Productize</h1>
      <Flex gap={2}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/explore">Explore</Link>
        </div>
      </Flex>
      <Routes>
        <Route index path="/*" element={<ExternalPages />} />
        <Route path="/explore/*" element={<Explore />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
