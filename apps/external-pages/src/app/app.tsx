import '../styles.scss';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
