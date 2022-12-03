import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignInn } from '../pages/SignInn';
import { SignUp } from '../pages/SingUp';
import { Dashboard } from '../pages/Dashboard';
import { PrivateRouter } from './privateRouter';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInn />} />
        <Route path="/sing-up" element={<SignUp />} />

        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};
