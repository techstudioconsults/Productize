// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
import '../styles.scss';

import { Route, Routes, useLocation } from 'react-router-dom';
import ExploreIndex from '../Pages/Explore';
import Cart from '../Pages/Cart';
import ExploreDesign from '../Pages/Explore/categories/design';

export function App() {
  const location = useLocation();
  console.log(location);

  return (
    <Routes>
      <Route index element={<ExploreIndex />} />
      <Route path="/design" element={<ExploreDesign />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
