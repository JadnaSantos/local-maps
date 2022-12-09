import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layout/DefaultLayout';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SingUp';
import { DetailsStore } from '../pages/DetailsStore';
import { StoresMap } from '../pages/StoresMap';
import { PrivateRouter } from './privateRouter';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sing-up" element={<SignUp />} />
        <Route path="/" element={<DefaultLayout />}>

          <Route path="/home" element={<PrivateRouter><Home /></PrivateRouter>}></Route>
          <Route path="/store-map" element={<PrivateRouter><StoresMap /></PrivateRouter>}></Route>
          <Route path="/register" element={<PrivateRouter><Register /></PrivateRouter>}></Route>
          <Route path="store/:id" element={<PrivateRouter><DetailsStore /></PrivateRouter>}></Route>

        </Route>
      </Routes>
    </Router>
  );
};
