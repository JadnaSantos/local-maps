import { Routes, Route } from 'react-router-dom';
import { SignInn } from '../pages/SignInn';
import { SignUp } from '../pages/SingUp';
import { Dashboard } from '../pages/Dashboard';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInn />} />
      <Route path="/sing-up" element={<SignUp />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
