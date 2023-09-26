import '../styles.scss';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
