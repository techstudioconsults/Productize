import '../styles.scss';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Features from '../pages/features';

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}

export default App;
