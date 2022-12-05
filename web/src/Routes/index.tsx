import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Registration } from '../pages/Registration';
import { SignInn } from '../pages/SignInn';
import { SignUp } from '../pages/SingUp';
import { PrivateRouter } from './privateRouter';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInn />} />
        <Route path="/sing-up" element={<SignUp />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/registration" element={<PrivateRouter />}>
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </Router>
  );
};
