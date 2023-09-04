import '../styles.scss';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Features from '../pages/features';
import Pricing from '../pages/pricing';

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;
