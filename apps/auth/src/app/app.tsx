import { PreLoader } from '@productize/shared/ui';
import ForgotPassword from '../pages/forget-password';
import Login from '../pages/login';
import Signup from '../pages/signup';
import '../styles.scss';

import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route index element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/fetching-data/:provider" element={<PreLoader />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
