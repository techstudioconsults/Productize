import ForgotPassword from '../pages/forget-password';
import Login from '../pages/login';
import Signup from '../pages/signup';
import '../styles.scss';

import { Route, Routes, useLocation } from 'react-router-dom';

export function App() {
  const location = useLocation();
  console.log(location);

  return (
    <Routes>
      <Route index element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
