import ForgotPassword from '../pages/forget-password';
import Login from '../pages/login';
import Signup from '../pages/signup';
import '../styles.scss';

import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route index path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
