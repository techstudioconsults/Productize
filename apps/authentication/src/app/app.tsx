import ForgotPassword from '../pages/forget-password';
import Login from '../pages/login';
import Signup from '../pages/signup';
import '../styles.scss';

import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route index element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
